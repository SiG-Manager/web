import { api } from "./client";

export const activeTrainShiftsWebClient = {
    create: async (userData, token) => {
        const response = await api.post('/ActiveTrainShifts', {
            adminId: userData.adminId,
            gasAmount: userData.gasAmount,
            firstTicketNumber: userData.firstTicketNumber,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }, token);
        return response;
    },

    update: async (id, userData, token) => {
        const response = await api.put(`/ActiveTrainShifts/${id}`, {
            adminId: userData.adminId,
            gasAmount: userData.gasAmount,
            firstTicketNumber: userData.firstTicketNumber,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }, token);

        return response;
    },

    getAll: async (token) => {
        return await api.get('/ActiveTrainShifts', token)
    },

    getById: async (id, token) => {
        return await api.get(`/ActiveTrainShifts/${id}`, token)
    },

    delete: async (id, token) => {
        return await api.delete(`/ActiveTrainShifts/${id}`, token)
    }
}