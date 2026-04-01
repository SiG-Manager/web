import { api } from "./client";

export const usersWebClient = {
    create: async (userData, token) => {
        const response = await api.post('/users', {
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            passwordHash: userData.passwordHash,
            role: userData.role
        }, token);

        return response;
    },

    update: async (id, userData, token) => {
        const response = await api.put(`/users/${id}`, {
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            passwordHash: userData.passwordHash,
            role: userData.role
        }, token);

        return response;
    },

    getAll: async (token) => {
        return await api.get('/users', token)
    },

    getById: async (id, token) => {
        return await api.get(`/users/${id}`, token)
    },

    delete: async (id, token) => {
        return await api.delete(`/users/${id}`, token)
    }
};