import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { activeTrainShiftsWebClient } from "../../../../../api/activeTrainShiftsWebClient";
import { usersWebClient } from "../../../../../api/usersWebClient";
import Const from "../../../../../assets/Const";
import Select from "react-select";

const TOKEN = ""

function ActiveTrainShiftInfoUpdate() {
    const { id } = useParams()
    const [shiftInfo, setShiftInfo] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function loadShiftInfo(id) {
            try {
                setIsLoading(true)
                const data = await activeTrainShiftsWebClient.getById(id, TOKEN)

                const usersData = await usersWebClient.getAll(TOKEN)

                setUsers(usersData)
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

    const validate = () => {
        const newErrors = {}

        if (!shiftInfo.adminId)
            newErrors.adminId = "Администратор обязателен"
        if (!shiftInfo.firstTicketNumber)
            newErrors.firstTicketNumber = "Билет обязателен"
        else if (shiftInfo.firstTicketNumber < 1)
            newErrors.firstTicketNumber = "Указан неверный номер билета"
        if (!shiftInfo.ticketPrice)
            newErrors.ticketPrice = "Стоимость билета обязательна"
        else if (shiftInfo.ticketPrice < 200 || shiftInfo.ticketPrice > 500)
            newErrors.ticketPrice = "Стоимость билета должна быть больше 200 и 500"
        if (!shiftInfo.openDateTime)
            newErrors.openDateTime = "Время открытия обязательно"
        if (!shiftInfo.gasAmount)
            newErrors.gasAmount = "Количество бензина обязательно"
        else if (shiftInfo.gasAmount < 0.1)
            newErrors.gasAmount = "Количество бензина обязательно"

        return newErrors
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        const newErrors = validate()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        try {
            setIsLoading(true)
            await activeTrainShiftsWebClient.update(shiftInfo.id, {
                adminId: shiftInfo.adminId,
                gasAmount: shiftInfo.gasAmount,
                firstTicketNumber: shiftInfo.firstTicketNumber,
                ticketPrice: shiftInfo.ticketPrice,
                openDateTime: shiftInfo.openDateTime
            }, TOKEN)
            navigate(`${Const.activeTrainShiftInfoUrl}/${shiftInfo.id}`)
        } catch (error) {
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    const userOptions = users?.map((u) => ({
        value: u.id,
        label: `${u.firstName} ${u.lastName}`
    }))

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

    return (
        <div>
            <form className="d-flex flex-column gap-2" onSubmit={handleUpdate}>
                <div>
                    <label>Администратор:</label>
                    <Select className={`form-control p-0 ${errors.adminId ? "is-invalid pe-5" : ""}`}
                        options={userOptions}
                        value={userOptions.find(opt => opt.value === shiftInfo.adminId)}
                        onChange={(selected) => {
                            setShiftInfo({ ...shiftInfo, adminId: selected.value })
                            setErrors({ ...errors, adminId: "" })
                        }}
                        classNamePrefix="custom-select"
                        placeholder="Выберите администратора..."
                    />
                    {errors.adminId &&
                        <div className=" invalid-feedback ">{errors.adminId}</div>
                    }
                </div>
                <div>
                    <label>Количество бензина (л):</label>
                    <input className={`form-control ${errors.gasAmount ? "is-invalid" : ""}`}
                        type="number"
                        min={0.1} max={999} step={0.1}
                        placeholder="Введите количество сахара..."
                        value={shiftInfo.gasAmount}
                        onChange={(e) => {
                            setShiftInfo({ ...shiftInfo, gasAmount: e.target.value })
                            setErrors({ ...errors, gasAmount: "" })
                        }}
                    />
                    {errors.gasAmount &&
                        <div className=" invalid-feedback">{errors.gasAmount}</div>
                    }
                </div>
                <div>
                    <label>Номер билета:</label>
                    <input className={`form-control ${errors.firstTicketNumber ? "is-invalid" : ""}`}
                        type="number"
                        min={1} max={999}
                        placeholder="Введите номер билета..."
                        value={shiftInfo.firstTicketNumber}
                        onChange={(e) => {
                            setShiftInfo({ ...shiftInfo, firstTicketNumber: e.target.value })
                            setErrors({ ...errors, firstTicketNumber: "" })
                        }}
                    />
                    {errors.firstTicketNumber &&
                        <div className=" invalid-feedback">{errors.firstTicketNumber}</div>
                    }
                </div>
                <div>
                    <label>Стоимость билета:</label>
                    <input className={`form-control ${errors.ticketPrice ? "is-invalid" : ""}`}
                        type="number"
                        min={1} max={999}
                        placeholder="Введите номер билета..."
                        value={shiftInfo.ticketPrice}
                        onChange={(e) => {
                            setShiftInfo({ ...shiftInfo, ticketPrice: e.target.value })
                            setErrors({ ...errors, ticketPrice: "" })
                        }}
                    />
                    {errors.ticketPrice &&
                        <div className=" invalid-feedback">{errors.ticketPrice}</div>
                    }
                </div>
                <div>
                    <label>Время открытия:</label>
                    <input className={`form-control ${errors.openDateTime ? "is-invalid" : ""}`}
                        type="datetime-local"
                        placeholder="Введите номер билета..."
                        value={shiftInfo.openDateTime}
                        onChange={(e) => {
                            setShiftInfo({ ...shiftInfo, openDateTime: e.target.value })
                            setErrors({ ...errors, openDateTime: "" })
                        }}
                    />
                    {errors.openDateTime &&
                        <div className=" invalid-feedback">{errors.openDateTime}</div>
                    }
                </div>
                <button type="submit" className="btn btn-primary mt-1">
                    Подтвердить изменения
                </button>
                <Link className="btn btn-outline-primary" to={`${Const.activeTrainShiftInfoUrl}/${shiftInfo.id}`}>
                    Назад
                </Link>
            </form>
        </div>
    )
}

export default ActiveTrainShiftInfoUpdate