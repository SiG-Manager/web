import ApiConst from "./base/apiConst";
import { api } from "./base/client";

export const activeCarsShiftsWebClient = {
    create: async (userData, token) => {
        return await api.post(
            ApiConst.endpoints.activeCarsShifts,
            ApiConst.createTemplates.activeCarsShift(userData),
            token
        );
    },

    update: async (id, userData, token) => {
        return await await api.put(
            ApiConst.endpoints.activeCarsShiftById(id),
            ApiConst.updateTemplates.activeCarsShift(userData),
            token
        );
    },

    getAll: async (token) => {
        return await api.get(
            ApiConst.endpoints.activeCarsShifts,
            token
        )
    },

    getById: async (id, token) => {
        return await api.get(
            ApiConst.endpoints.activeCarsShiftById(id),
            token
        )
    },

    delete: async (id, token) => {
        return await api.delete(
            ApiConst.endpoints.activeCarsShiftById(id),
            token
        )
    }
};