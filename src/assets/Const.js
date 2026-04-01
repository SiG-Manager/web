class Const {
    // ========== СТРАНИЦЫ ==========
    static indexUrl = "/"
    static loginPageUrl = "/login"
    static registerPageUrl = "/register"
    static employeesUrl = "/employees"
    static employeeInfoUrl = "/employee-info"
    static scheduleUrl = "/schedule"

    // ========== СМЕНЫ ==========
    static activeShiftsUrl = "/shifts/active"
    static closedShiftsUrl = "/shifts/closed"
    static openShiftUrl = "/shifts/open"

    // Закрытие смен (разные названия!)
    static closeCarsShiftUrl = "/shifts/close/cars"
    static closeFoodShiftUrl = "/shifts/close/food"
    static closeTrainShiftUrl = "/shifts/close/train"

    // Активные смены (инфо)
    static activeCarsShiftInfoUrl = "/shift-info/active/cars"
    static activeFoodShiftInfoUrl = "/shift-info/active/food"
    static activeTrainShiftInfoUrl = "/shift-info/active/train"  // исправлено: было /shifts-info

    // Обновление активных смен
    static activeCarsShiftInfoUpdateUrl = "/shift-info/active/cars/update"
    static activeFoodShiftInfoUpdateUrl = "/shift-info/active/food/update"
    static activeTrainShiftInfoUpdateUrl = "/shift-info/active/train/update"

    // Закрытые смены (инфо)
    static carsShiftInfoUrl = "/shift-info/closed/cars"
    static foodShiftInfoUrl = "/shift-info/closed/food"
    static trainShiftInfoUrl = "/shift-info/closed/train"

    // Обновление закрытых смен
    static carsShiftInfoUpdateUrl = "/shift-info/closed/cars/update"
    static foodShiftInfoUpdateUrl = "/shift-info/closed/food/update"
    static trainShiftInfoUpdateUrl = "/shift-info/closed/train/update"

    // ========== БАЛАНС ==========
    static balanceUrl = "/balance"
    static balanceUpdateUrl = "/balance/update"

    // ========== МАШИНЫ ==========
    static carsUrl = "/balance/cars"
    static carAddUrl = "/balance/cars/add"
    static carUpdateUrl = "/balance/cars/update"

    // ========== СПРАВОЧНИКИ ==========
    static parkNames = [
        { value: "Галушина", label: "Галушина" },
        { value: "Сульфат", label: "Сульфат" },
        { value: "Красная пристань", label: "Красная пристань" }
    ]

    // ========== ХЕЛПЕРЫ ==========
    static getPageTitle(pathName) {
        const titles = {
            [this.indexUrl]: "Главная",
            [this.employeesUrl]: "Сотрудники",
            [this.scheduleUrl]: "График",
            [this.activeShiftsUrl]: "Активные смены",
            [this.closedShiftsUrl]: "Отчёты",
        }

        // Точное совпадение
        if (titles[pathName]) return titles[pathName]

        // Частичные совпадения
        if (pathName.includes(this.employeeInfoUrl)) return "Информация о сотруднике"
        if (pathName.includes("shift-info") && pathName.includes("update")) return "Изменение смены"
        if (pathName.includes("shift-info")) return "Информация о смене"

        return "Не найдено"
    }
}

export default Const