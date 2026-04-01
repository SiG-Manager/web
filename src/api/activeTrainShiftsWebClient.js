import ApiConst from "./base/apiConst";
import { api } from "./base/client";

export const activeTrainShiftsWebClient = {
    create: async (userData, token) => {
        return await api.post(
            ApiConst.endpoints.activeTrainShifts,
            ApiConst.createTemplates.activeFoodShift(userData),
            token
        );
    },

    update: async (id, userData, token) => {
        return await api.put(
            ApiConst.endpoints.activeTrainShiftById(id),
            ApiConst.updateTemplates.activeFoodShift(userData),
            token
        );
    },

    getAll: async (token) => {
        return await api.get(
            ApiConst.endpoints.activeTrainShifts,
            token
        )
    },

    getById: async (id, token) => {
        return await api.get(
            ApiConst.endpoints.activeTrainShiftById(id),
            token
        )
    },

    delete: async (id, token) => {
        return await api.delete(
            ApiConst.endpoints.activeTrainShiftById(id),
            token
        )
    }
}