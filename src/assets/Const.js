class Const {

    // ========== НОВАЯ СТРУКТУРА (routes) ==========
    static routes = {
        // Страницы
        index: "/",
        login: "/login",
        register: "/register",
        employees: "/employees",
        employeeInfo: "/employee-info",
        schedule: "/schedule",

        // Смены
        activeShifts: "/shifts/active",
        closedShifts: "/shifts/closed",
        openShift: "/shifts/open",

        // Закрытие смен
        closeShift: {
            cars: "/shifts/close/cars",
            food: "/shifts/close/food",
            train: "/shifts/close/train"
        },

        shiftInfo: "/shift-info",
        // Активные смены (инфо)
        activeShiftInfo: {
            cars: "/shift-info/active/cars",
            food: "/shift-info/active/food",
            train: "/shift-info/active/train"
        },

        // Обновление активных смен
        activeShiftInfoUpdate: {
            cars: "/shift-info/active/cars/update",
            food: "/shift-info/active/food/update",
            train: "/shift-info/active/train/update"
        },

        // Закрытые смены (инфо)
        closedShiftInfo: {
            cars: "/shift-info/closed/cars",
            food: "/shift-info/closed/food",
            train: "/shift-info/closed/train"
        },

        // Обновление закрытых смен
        closedShiftInfoUpdate: {
            cars: "/shift-info/closed/cars/update",
            food: "/shift-info/closed/food/update",
            train: "/shift-info/closed/train/update"
        },

        // Баланс
        balance: "/balance",
        balanceUpdate: "/balance/update",

        // Машины
        cars: "/balance/cars",
        carAdd: "/balance/cars/add",
        carUpdate: "/balance/cars/update",
    }

    static parkNames = [
        { value: "Галушина", label: "Галушина" },
        { value: "Сульфат", label: "Сульфат" },
        { value: "Красная пристань", label: "Красная пристань" }
    ]

    static getPageTitle(pathName) {
        const titles = {
            [this.routes.index]: "Главная",
            [this.routes.login]: "Вход",
            [this.routes.register]: "Регистрация",
            [this.routes.employees]: "Сотрудники",
            [this.routes.schedule]: "График",
            [this.routes.activeShifts]: "Активные смены",
            [this.routes.closedShifts]: "Отчёты",
            [this.routes.balance]: "Склад",
            [this.routes.cars]: "Машинки",

            [this.routes.closeShift.cars]: "Закрытие смены машинок",
            [this.routes.closeShift.food]: "Закрытие смены ваты",
            [this.routes.closeShift.train]: "Закрытие смены паровоза",

            [this.routes.carAdd]: "Добавление машинки",
            [this.routes.carUpdate]: "Изменение машинки",
            [this.routes.balanceUpdate]: "Изменение склада",
        }

        if (titles[pathName]) return titles[pathName]

        if (pathName.startsWith(this.routes.employeeInfo)) return "Информация о сотруднике"

        if (pathName.startsWith(this.routes.activeShiftInfo.cars)) return "Информация о смене машинок"
        if (pathName.startsWith(this.routes.activeShiftInfo.food)) return "Информация о смене ваты"
        if (pathName.startsWith(this.routes.activeShiftInfo.train)) return "Информация о смене паровоза"

        if (pathName.startsWith(this.routes.activeShiftInfoUpdate.cars)) return "Изменение смены машинок"
        if (pathName.startsWith(this.routes.activeShiftInfoUpdate.food)) return "Изменение смены ваты"
        if (pathName.startsWith(this.routes.activeShiftInfoUpdate.train)) return "Изменение смены паровоза"

        if (pathName.startsWith(this.routes.closedShiftInfo.cars)) return "Отчёт смены машинок"
        if (pathName.startsWith(this.routes.closedShiftInfo.food)) return "Отчёт смены ваты"
        if (pathName.startsWith(this.routes.closedShiftInfo.train)) return "Отчёт смены паровоза"

        if (pathName.startsWith(this.routes.closedShiftInfoUpdate.cars)) return "Изменение отчёта смены машинок"
        if (pathName.startsWith(this.routes.closedShiftInfoUpdate.food)) return "Изменение отчёта смены ваты"
        if (pathName.startsWith(this.routes.closedShiftInfoUpdate.train)) return "Изменение отчёта смены паровоза"

        return "Не найдено"
    }
}

export default Const