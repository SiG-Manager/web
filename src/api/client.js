const getBaseUrl = () => {
    const hostname = window.location.hostname;
    
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return import.meta.env.ALT_API_URL;
    }
    
    return import.meta.env.API_URL;
};

const BASE_URL = getBaseUrl();

const logError = (context) => {
    if (import.meta.env.DEV) {
        console.error('API request failed:', context);
    }
};

class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}, token) {
        const url = `${this.baseURL}${endpoint}`;
        
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            const response = await fetch(url, {
                ...options,
                headers,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            let data;
            const contentType = response.headers.get('content-type');

            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            if (!response.ok) {
                const error = new Error(`HTTP error! status: ${response.status}`);
                error.status = response.status;
                error.data = data;
                throw error;
            }

            return data;
        } catch (error) {
            clearTimeout(timeoutId);

            if (error.name === 'AbortError') {
                throw new Error('Request timeout');
            }

            logError({
                url,
                method: options.method || 'GET',
                error: error.message,
                status: error.status
            });

            throw error;
        }
    }

    get(endpoint, token) {
        return this.request(endpoint, { method: 'GET' }, token);
    }

    post(endpoint, data = {}, token) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        }, token);
    }

    put(endpoint, data = {}, token) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        }, token);
    }

    delete(endpoint, token) {
        return this.request(endpoint, {
            method: 'DELETE'
        }, token);
    }

    upload(endpoint, formData, token) {
        return this.request(endpoint, {
            method: 'POST',
            body: formData,
            headers: {} 
        }, token);
    }
}

export const api = new ApiClient(BASE_URL);