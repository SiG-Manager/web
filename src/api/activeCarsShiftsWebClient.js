import { api } from "./client";

export const activeCarsShiftsWebClient = {
    create: async (userData, token) => {
        const response = await api.post('/ActiveCarsShifts', {
            adminId: userData.adminId,
            supportId: userData.supportId,
            firstTicketNumber: userData.firstTicketNumber,
            parkName: userData.parkName,
            ticketPrice: userData.ticketPrice,
        }, token);
        return response;
    },

    update: async (id, userData, token) => {
        const response = await api.put(`/ActiveCarsShifts/${id}`, {
            adminId: userData.adminId,
            supportId: userData.supportId,
            firstTicketNumber: userData.firstTicketNumber,
            parkName: userData.parkName,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }, token);

        return response;
    },

    getAll: async (token) => {
        return await api.get('/ActiveCarsShifts', token)
    },

    getById: async (id, token) => {
        return await api.get(`/ActiveCarsShifts/${id}`, token)
    },

    delete: async (id, token) => {
        return await api.delete(`/ActiveCarsShifts/${id}`, token)
    }
};