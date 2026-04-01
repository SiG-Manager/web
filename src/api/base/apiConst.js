class ApiConst {
    static endpoints = {
        users: '/users',
        userById: (id) => `/users/${id}`,
        
        activeCarsShifts: '/ActiveCarsShifts',
        activeCarsShiftById: (id) => `/ActiveCarsShifts/${id}`,
        
        activeFoodShifts: '/ActiveFoodShifts',
        activeFoodShiftById: (id) => `/ActiveFoodShifts/${id}`,
        
        activeTrainShifts: '/ActiveTrainShifts',
        activeTrainShiftById: (id) => `/ActiveTrainShifts/${id}`,
    }

    static createTemplates = {
        user: (userData) => ({
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            passwordHash: userData.passwordHash,
            role: userData.role
        }),
        
        activeCarsShift: (userData) => ({
            adminId: userData.adminId,
            supportId: userData.supportId,
            firstTicketNumber: userData.firstTicketNumber,
            parkName: userData.parkName,
            ticketPrice: userData.ticketPrice,
        }),
        
        activeFoodShift: (userData) => ({
            adminId: userData.adminId,
            firstTicketNumber: userData.firstTicketNumber,
            sugarAmount: userData.sugarAmount,
            colorSugarAmount: userData.colorSugarAmount,
            ticketPrice: userData.ticketPrice,
        }),
        
        activeTrainShift: (userData) => ({
            adminId: userData.adminId,
            gasAmount: userData.gasAmount,
            firstTicketNumber: userData.firstTicketNumber,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }),
    }

    static updateTemplates = {
        user: (userData) => ({
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            passwordHash: userData.passwordHash,
            role: userData.role
        }),
        
        activeCarsShift: (userData) => ({
            adminId: userData.adminId,
            supportId: userData.supportId,
            firstTicketNumber: userData.firstTicketNumber,
            parkName: userData.parkName,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }),
        
        activeFoodShift: (userData) => ({
            adminId: userData.adminId,
            firstTicketNumber: userData.firstTicketNumber,
            sugarAmount: userData.sugarAmount,
            colorSugarAmount: userData.colorSugarAmount,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }),
        
        activeTrainShift: (userData) => ({
            adminId: userData.adminId,
            gasAmount: userData.gasAmount,
            firstTicketNumber: userData.firstTicketNumber,
            ticketPrice: userData.ticketPrice,
            openDateTime: userData.openDateTime
        }),
    }
}

export default ApiConst