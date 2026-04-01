import { useEffect, useState } from "react";
import { activeCarsShiftsWebClient } from "../../api/activeCarsShiftsWebClient";
import { Link } from "react-router-dom";
import Const from "../../assets/Const";
import { usersWebClient } from "../../api/usersWebClient";
import { activeFoodShiftsWebClient } from "../../api/activeFoodShiftsWebClient";
import { activeTrainShiftsWebClient } from "../../api/activeTrainShiftsWebClient";

const TOKEN = ""

function ClosedShifts() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769)
    const [isLoading, setIsLoading] = useState(false)

    const [employees, setEmployees] = useState([])
    const [carsShifts, setCarsShifts] = useState([])
    const [foodShifts, setFoodShifts] = useState([])
    const [trainShifts, setTrainShifts] = useState([])

    useEffect(() => {
        async function loadEmployees() {
            setIsLoading(true)
            var data = await usersWebClient.getAll(TOKEN)
            setEmployees(data)
        }

        async function loadCarsShifts() {
            setIsLoading(true)
            var data = await activeCarsShiftsWebClient.getAll(TOKEN)
            setCarsShifts(data)
        }

        async function loadFoodShifts() {
            setIsLoading(true)
            var data = await activeFoodShiftsWebClient.getAll(TOKEN)
            setFoodShifts(data)
        }

        async function loadTrainShifts() {
            var data = await activeTrainShiftsWebClient.getAll(TOKEN)
            setTrainShifts(data)
        }

        async function loadAllData() {
            try {
                setIsLoading(true)

                await loadEmployees()
                await loadTrainShifts()
                await loadCarsShifts()
                await loadFoodShifts()
            } catch (error) {
                alert(error)
            } finally {
                setIsLoading(false)
            }
        }

        loadAllData()
    }, [])

    if (isLoading)
        return (
            <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
                <span className=" spinner-border" style={{ height: "50px", width: "50px" }}></span>
                <h2 className="display-4">Загрузка...</h2>
            </div>
        )

    return (
        <div>
            <div>
                <div className="d-flex gap-1 mb-2 flex" role="tablist">
                    <button className="btn btn-outline-primary active w-100" data-bs-toggle="tab" data-bs-target="#cars" type="button" role="tab">Машинки</button>
                    <button className="btn btn-outline-primary w-100" data-bs-toggle="tab" data-bs-target="#food" type="button" role="tab">Вата</button>
                    <button className="btn btn-outline-primary w-100" data-bs-toggle="tab" data-bs-target="#train" type="button" role="tab">Паровоз</button>
                </div>
            </div>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="cars">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Админ</th>
                                <th className="pc-visible">Помощник</th>
                                <th>Билет</th>
                                <th className="pc-visible">Стоимость билета</th>
                                <th>Открытие</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carsShifts.map((element) => {
                                const admin = employees.find((e) => e.id == element.adminId);
                                const support = employees.find((e) => e.id == element.supportId);
                                return (
                                    <tr key={element.id}>
                                        <td>{admin?.firstName}<br className=" phone-visible" /> {admin?.lastName}</td>
                                        <td className="pc-visible">{support?.firstName} {support?.lastName}</td>
                                        <td>{element.firstTicketNumber}</td>
                                        <td className="pc-visible">{element.ticketPrice}</td>
                                        <td>{new Date(element.openDateTime).toLocaleTimeString()}</td>
                                        <td>
                                            <div className={`d-flex justify-content-center gap-1 ${isMobile ? "flex-column" : ""}`}>
                                                <Link className="btn btn-primary ps-1 pe-1 p-0" to={`${Const.activeCarsShiftInfoUrl}/${element.id}`}>
                                                    <label> Инфо</label>
                                                </Link>
                                                <Link className="btn btn-outline-danger ps-1 pe-1 p-0" to={`${Const.employeeInfoUrl}/${element.id}`}>
                                                    <label> Закрыть</label>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            {carsShifts.length === 0 && (
                                <tr >
                                    <td colSpan="10">
                                        Список смен пуст
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="tab-pane fade" id="food">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Админ</th>
                                <th>Билет</th>
                                <th className="pc-visible">Стоимость билета</th>
                                <th className="pc-visible">Сахар</th>
                                <th className="pc-visible">Цветной сахар</th>
                                <th>Открытие</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodShifts.map((element) => {
                                const admin = employees.find((e) => e.id == element.adminId);
                                return (
                                    <tr key={element.id}>
                                        <td>{admin?.firstName}<br className=" phone-visible" /> {admin?.lastName}</td>
                                        <td>{element.firstTicketNumber}</td>
                                        <td className="pc-visible">{element.ticketPrice}</td>
                                        <td className="pc-visible">{element.sugarAmount} кг</td>
                                        <td className="pc-visible">{element.colorSugarAmount} кг</td>
                                        <td>{new Date(element.openDateTime).toLocaleTimeString()}</td>
                                        <td>
                                            <div className={`d-flex justify-content-center gap-1 ${isMobile ? "flex-column" : ""}`}>
                                                <Link className="btn btn-primary ps-1 pe-1 p-0" to={`${Const.activeFoodShiftInfoUrl}/${element.id}`}>
                                                    <label>Инфо</label>
                                                </Link>
                                                <Link className="btn btn-outline-danger ps-1 pe-1 p-0" to={`${Const.employeeInfoUrl}/${element.id}`}>
                                                    <label>Закрыть</label>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            {foodShifts.length === 0 && (
                                <tr >
                                    <td colSpan="10">
                                        Список смен пуст
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="tab-pane fade" id="train">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Админ</th>
                                <th>Билет</th>
                                <th className="pc-visible">Стоимость билета</th>
                                <th className="pc-visible">Бензин</th>
                                <th>Открытие</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainShifts.map((element) => {
                                const admin = employees.find((e) => e.id == element.adminId);
                                return (
                                    <tr key={element.id}>
                                        <td>{admin?.firstName}<br className=" phone-visible" /> {admin?.lastName}</td>
                                        <td>{element.firstTicketNumber}</td>
                                        <td className="pc-visible">{element.ticketPrice}</td>
                                        <td className="pc-visible">{element.gasAmount} л</td>
                                        <td>{new Date(element.openDateTime).toLocaleTimeString()}</td>
                                        <td>
                                            <div className={`d-flex justify-content-center gap-1 ${isMobile ? "flex-column" : ""}`}>
                                                <Link className="btn btn-primary ps-1 pe-1 p-0" to={`${Const.activeTrainShiftInfoUrl}/${element.id}`}>
                                                    <label>Инфо</label>
                                                </Link>
                                                <Link className="btn btn-outline-danger ps-1 pe-1 p-0" to={`${Const.employeeInfoUrl}/${element.id}`}>
                                                    <label>Закрыть</label>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            {trainShifts.length === 0 && (
                                <tr >
                                    <td colSpan="10">
                                        Список смен пуст
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ClosedShifts