import ApiConst from "./base/apiConst";
import { api } from "./base/client";

export const activeFoodShiftsWebClient = {
    create: async (userData, token) => {
        return await api.post(
            ApiConst.endpoints.activeFoodShifts,
            ApiConst.createTemplates.activeFoodShift(userData),
            token
        );
    },

    update: async (id, userData, token) => {
        return await api.put(
            ApiConst.endpoints.activeFoodShiftById(id),
            ApiConst.updateTemplates.activeFoodShift(userData),
            token
        );
    },

    getAll: async (token) => {
        return await api.get(
            ApiConst.endpoints.activeFoodShifts,
            token
        )
    },

    getById: async (id, token) => {
        return await api.get(
            ApiConst.endpoints.activeFoodShiftById(id),
            token
        )
    },

    delete: async (id, token) => {
        return await api.delete(
            ApiConst.endpoints.activeFoodShiftById(id),
            token
        )
    }
};