import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { activeCarsShiftsWebClient } from "../../../../../api/activeCarsShiftsWebClient";
import { usersWebClient } from "../../../../../api/usersWebClient";
import Const from "../../../../../assets/Const";

const TOKEN = ""

function ActiveCarsShiftsInfo() {
    const { id } = useParams()
    const [shiftInfo, setShiftInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [admin, setAdmin] = useState()
    const [support, setSupport] = useState()

    useEffect(() => {
        async function loadShiftInfo(id) {
            try {
                setIsLoading(true)
                const data = await activeCarsShiftsWebClient.getById(id, TOKEN)

                const admin = await usersWebClient.getById(data.adminId, TOKEN)
                const support = await usersWebClient.getById(data.supportId, TOKEN)

                setAdmin(admin)
                setSupport(support)
                setShiftInfo(data)
            } catch (error) {
                alert(error)
                setShiftInfo(null)
            } finally {
                setIsLoading(false)
            }
        }

        if (id) {
            loadShiftInfo(id)
        }
    }, [id])

    if (isLoading)
        return (
            <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
                <span className=" spinner-border" style={{ height: "50px", width: "50px" }}></span>
                <h2 className="display-4">Загрузка...</h2>
            </div>
        )

    if (!shiftInfo)
        return (
            <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
                <h2 className="display-4">Смена не найдена</h2>
            </div>
        )

    else
        return (
            <div>
                <div className="row fs-5">
                    <table className="table table-alt table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>ID:</td>
                                <td className="fw-semibold">{shiftInfo.id}</td>
                            </tr>
                            <tr>
                                <td>Администратор:</td>
                                <td className="fw-semibold">{admin?.firstName} {admin?.lastName}</td>
                            </tr>
                            <tr>
                                <td>Помощник:</td>
                                <td className="fw-semibold">{support?.firstName} {support?.lastName}</td>
                            </tr>
                            <tr>
                                <td>Парк:</td>
                                <td className="fw-semibold">{shiftInfo.parkName}</td>
                            </tr>
                            <tr>
                                <td>Первый билет:</td>
                                <td className="fw-semibold">{shiftInfo.firstTicketNumber}</td>
                            </tr>
                            <tr>
                                <td>Стоимость билета:</td>
                                <td className="fw-semibold">{shiftInfo.ticketPrice}</td>
                            </tr>
                            <tr>
                                <td>Время открытия:</td>
                                <td className="fw-semibold">{new Date(shiftInfo.openDateTime).toLocaleTimeString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex flex-column mt-2 gap-1">
                    <Link className="btn btn-primary" >Закрыть смену</Link>
                    <Link className="btn btn-outline-primary" to={`${Const.activeCarsShiftInfoUpdateUrl}/${shiftInfo.id}`}>Изменить информацию</Link>
                </div>
            </div>
        )
}

export default ActiveCarsShiftsInfo