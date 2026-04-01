import { api } from "./client";

export const activeFoodShiftsWebClient = {
    create: async (userData, token) => {
        const response = await api.post('/ActiveFoodShifts', {
            adminId: userData.adminId,
            firstTicketNumber: userData.firstTicketNumber,
            sugarAmount: userData.sugarAmount,
            colorSugarAmount: userData.colorSugarAmount,
            ticketPrice: userData.ticketPrice,
        }, token);
        return response;
    },

    update: async (id, userData, token) => {
        const response = await api.put(`/ActiveFoodShifts/${id}`, {
            adminId: userData.adminId,
            firstTicketNumber: userData.firstTicketNumber,
            sugarAmount: userData.sugarAmount,
            colorSugarAmount: userData.colorSugarAmount,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }, token);

        return response;
    },

    getAll: async (token) => {
        return await api.get('/ActiveFoodShifts', token)
    },

    getById: async (id, token) => {
        return await api.get(`/ActiveFoodShifts/${id}`, token)
    },

    delete: async (id, token) => {
        return await api.delete(`/ActiveFoodShifts/${id}`, token)
    }
};