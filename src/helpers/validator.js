export const validator = {
    required: (value, fieldName) => {
        if (!value && value !== 0) {
            return `${fieldName} обязателен(а)`;
        }
        return null;
    },

    min: (minValue) => (value, fieldName) => {
        if (value && parseFloat(value) < minValue) {
            return `${fieldName} должен быть не меньше ${minValue}`;
        }
        return null;
    },

    max: (maxValue) => (value, fieldName) => {
        if (value && parseFloat(value) > maxValue) {
            return `${fieldName} должен быть не больше ${maxValue}`;
        }
        return null;
    },

    minLength: (minLength) => (value, fieldName) => {
        if (value && value.toString().length < minLength) {
            return `${fieldName} должен содержать минимум ${minLength} символов`;
        }
        return null;
    },

    pattern: (regex, message) => (value, fieldName) => {
        if (value && !regex.test(value)) {
            return message || `Неверный формат ${fieldName}`;
        }
        return null;
    },

    number: (value, fieldName) => {
        if (value && isNaN(parseFloat(value))) {
            return `${fieldName} должен быть числом`;
        }
        return null;
    },

    range: (min, max) => (value, fieldName) => {
        if (value) {
            const num = parseFloat(value);
            if (num < min || num > max) {
                return `${fieldName} должен быть от ${min} до ${max}`;
            }
        }
        return null;
    }
}