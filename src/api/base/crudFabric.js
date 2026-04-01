import { api } from "./client";

export const crudFabric = {
    createCrudMethods: (endpoint, createTemplate, updateTemplate) => ({
        create: async (data, token) => await api.post(endpoint.all, createTemplate(data), token),
        update: async (id, data, token) => await api.put(endpoint.byId(id), updateTemplate(data), token),
        getAll: async (token) => await api.get(endpoint.all, token),
        getById: async (id, token) => await api.get(endpoint.byId(id), token),
        delete: async (id, token) => await api.delete(endpoint.byId(id), token),
    })
}