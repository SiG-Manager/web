const logError = (context) => {
    if (import.meta.env.DEV) {
        console.error('❌ API request failed:', context);
    }
};

const logRequest = (method, url, status, data, error = null) => {
    if (import.meta.env.DEV) {
        const style = status >= 200 && status < 300 ? 'color: green' : 'color: red';
        console.groupCollapsed(
            `%c📡 ${method} ${url}`,
            style,
            status ? `(${status})` : ''
        );
        console.log('URL:', url);
        console.log('Status:', status || '❌ No response');
        if (data) console.log('Response:', data);
        if (error) console.error('Error:', error);
        console.groupEnd();
    }
};

class ApiClient {
    constructor() {
        const hostname = window.location.hostname;

        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            this.baseURL = import.meta.env.VITE_ALT_API_URL;
        }
        else {
            this.baseURL = import.meta.env.VITE_API_URL;
        }
    }

    async request(endpoint, options = {}, token) {
        const url = `${this.baseURL}${endpoint}`;
        const method = options.method || 'GET';

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

            // Логируем успешный ответ
            logRequest(method, url, response.status, data);

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
                const timeoutError = new Error('Request timeout');
                logRequest(method, url, null, null, timeoutError);
                logError({ url, method, error: timeoutError.message });
                throw timeoutError;
            }

            // Логируем ошибку
            logRequest(method, url, error.status || null, null, error);
            logError({
                url,
                method,
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

export const api = new ApiClient();