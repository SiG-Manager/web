import ApiConst from "./base/apiConst";
import { api } from "./base/client";

export const usersWebClient = {
    create: async (userData, token) => {
        return await api.post(
            ApiConst.endpoints.users,
            ApiConst.createTemplates.user(userData),
            token
        );
    },

    update: async (id, userData, token) => {
        return await api.put(
            ApiConst.endpoints.userById(id),
            ApiConst.updateTemplates.user(userData),
            token
        );
    },

    getAll: async (token) => {
        return await api.get(
            ApiConst.endpoints.users,
            token
        )
    },

    getById: async (id, token) => {
        return await api.get(
            ApiConst.endpoints.userById(id),
            token
        )
    },

    delete: async (id, token) => {
        return await api.delete(
            ApiConst.endpoints.userById(id),
            token
        )
    }
};