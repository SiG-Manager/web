class ApiConst {
    static endpoints = {
        users: {
            all: '/users',
            byId: (id) => `/users/${id}`,
        },

        activeShifts: {
            cars: {
                all: '/ActiveCarsShifts',
                byId: (id) => `/ActiveCarsShifts/${id}`
            },
            food: {
                all: '/ActiveFoodShifts',
                byId: (id) => `/ActiveFoodShifts/${id}`,
            },
            train: {
                all: '/ActiveTrainShifts',
                byId: (id) => `/ActiveTrainShifts/${id}`,
            }
        },

        closedShifts: {
            cars: {
                all: '/ClosedCarsShifts',
                byId: (id) => `/ClosedCarsShifts/${id}`
            },
            food: {
                all: '/ClosedFoodShifts',
                byId: (id) => `/ClosedFoodShifts/${id}`,
            },
            train: {
                all: '/ClosedTrainShifts',
                byId: (id) => `/ClosedTrainShifts/${id}`,
            }
        }
    }

    static createTemplates = {
        user: (userData) => ({
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            passwordHash: userData.passwordHash,
            role: userData.role
        }),

        activeShifts: {
            cars: (userData) => ({
                adminId: userData.adminId,
                supportId: userData.supportId,
                firstTicketNumber: userData.firstTicketNumber,
                parkName: userData.parkName,
                ticketPrice: userData.ticketPrice,
            }),

            food: (userData) => ({
                adminId: userData.adminId,
                firstTicketNumber: userData.firstTicketNumber,
                sugarAmount: userData.sugarAmount,
                colorSugarAmount: userData.colorSugarAmount,
                ticketPrice: userData.ticketPrice,
            }),

            train: (userData) => ({
                adminId: userData.adminId,
                gasAmount: userData.gasAmount,
                firstTicketNumber: userData.firstTicketNumber,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            })
        },

        closedShifts: {
            cars: (userData) => ({
                adminId: userData.adminId,
                supportId: userData.supportId,
                firstTicketNumber: userData.firstTicketNumber,
                parkName: userData.parkName,
                ticketPrice: userData.ticketPrice,
            }),

            food: (userData) => ({
                adminId: userData.adminId,
                firstTicketNumber: userData.firstTicketNumber,
                sugarAmount: userData.sugarAmount,
                colorSugarAmount: userData.colorSugarAmount,
                ticketPrice: userData.ticketPrice,
            }),

            train: (userData) => ({
                adminId: userData.adminId,
                gasAmount: userData.gasAmount,
                firstTicketNumber: userData.firstTicketNumber,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            })
        }

    }

    static updateTemplates = {
        user: (userData) => ({
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            passwordHash: userData.passwordHash,
            role: userData.role
        }),

        activeShifts: {
            cars: (userData) => ({
                adminId: userData.adminId,
                supportId: userData.supportId,
                firstTicketNumber: userData.firstTicketNumber,
                parkName: userData.parkName,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            }),

            food: (userData) => ({
                adminId: userData.adminId,
                firstTicketNumber: userData.firstTicketNumber,
                sugarAmount: userData.sugarAmount,
                colorSugarAmount: userData.colorSugarAmount,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            }),

            train: (userData) => ({
                adminId: userData.adminId,
                gasAmount: userData.gasAmount,
                firstTicketNumber: userData.firstTicketNumber,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            })
        },

        closedShifts: {
            cars: (userData) => ({
                adminId: userData.adminId,
                supportId: userData.supportId,
                firstTicketNumber: userData.firstTicketNumber,
                parkName: userData.parkName,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            }),

            food: (userData) => ({
                adminId: userData.adminId,
                firstTicketNumber: userData.firstTicketNumber,
                sugarAmount: userData.sugarAmount,
                colorSugarAmount: userData.colorSugarAmount,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            }),

            train: (userData) => ({
                adminId: userData.adminId,
                gasAmount: userData.gasAmount,
                firstTicketNumber: userData.firstTicketNumber,
                ticketPrice: userData.ticketPrice,
                openDateTime: userData.openDateTime
            })
        }

    }
}

export default ApiConst