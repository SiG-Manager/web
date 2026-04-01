import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Select from "react-select"
import { usersWebClient } from "../../../api/webClients"
import Const from "../../../assets/Const"

const TOKEN = ""

function ShiftUpdate({ shiftInfo, admin, support }) {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [userShiftInfo, setUserShiftInfo] = useState(shiftInfo)
    const [error, setError] = useState({})

    useEffect(() => {
        async function loadUsers() {
            try {
                setIsLoading(true)
                var data = await usersWebClient.getAll(TOKEN)
                setUsers(data)
            } catch (error) {
                alert(error)
            } finally {
                setIsLoading(false)
            }
        }

        loadUsers()
    }, [])

    const userOptions = users.map(user => ({
        value: user.id,
        label: `${user.firstName} ${user.lastName}`
    }));

    return (
        <div>
            <form className="d-flex flex-column gap-3">
                <div>
                    <label className="form-label fw-semibold">ID:</label>
                    <div className="fw-semibold form-control text-muted">{userShiftInfo.id}</div>
                </div>

                <div>
                    <label className="form-label fw-semibold">Админ:</label>
                    {isLoading ? (
                        <div className="d-flex align-items-center gap-3">
                            <span className="spinner-border" />
                            <label>Загрузка...</label>
                        </div>
                    ) : (
                        <>
                            <Select
                                options={userOptions}
                                className={`${error.adminId ? "error-select" : ""}`}
                                classNamePrefix="custom-select"
                                value={userOptions.find((u) => u.value === userShiftInfo.adminId)}
                                onChange={(selected) => {
                                    setUserShiftInfo({
                                        ...userShiftInfo,
                                        adminId: selected?.value
                                    })
                                    setError({ ...error, adminId: "" })
                                }}
                            />
                            {error.adminId && (
                                <div className="invalid-feedback d-block fs-6">
                                    {error.adminId}
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div>
                    <label className="form-label fw-semibold">Помощник:</label>
                    {isLoading ? (
                        <div className="d-flex align-items-center gap-3">
                            <span className="spinner-border" />
                            <label>Загрузка...</label>
                        </div>
                    ) : (
                        <>
                            <Select
                                options={userOptions}
                                className={`${error.supportId ? "error-select" : ""}`}
                                classNamePrefix="custom-select"
                                value={userOptions.find((u) => u.value === userShiftInfo.supportId)}
                                onChange={(selected) => {
                                    setUserShiftInfo({
                                        ...userShiftInfo,
                                        supportId: selected?.value
                                    })
                                    setError({ ...error, supportId: "" })
                                }}
                            />
                            {error.supportId && (
                                <div className="invalid-feedback d-block fs-6">
                                    {error.supportId}
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div>
                    <label className="form-label fw-semibold">Парк:</label>
                    {isLoading ? (
                        <div className="d-flex align-items-center gap-3">
                            <span className="spinner-border" />
                            <label>Загрузка...</label>
                        </div>
                    ) : (
                        <>
                            <Select
                                options={Const.parkNames}
                                className={` ${error.parkName ? "error-select" : ""}`}
                                classNamePrefix="custom-select"
                                value={Const.parkNames.find((u) => u.value === userShiftInfo.parkName)}
                                onChange={(selected) => {
                                    setUserShiftInfo({
                                        ...userShiftInfo,
                                        parkName: selected?.value
                                    })
                                    setError({ ...error, parkName: "" })
                                }}
                            />
                            {error.parkName && (
                                <div className="invalid-feedback d-block fs-6">
                                    {error.parkName}
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div>
                    <label className="form-label fw-semibold">Номер первого билета:</label>
                    <input
                        type="number"
                        className={`form-control ${error.firstTicketNumber ? "is-invalid" : ""}`}
                        value={userShiftInfo.firstTicketNumber}
                        onChange={(e) => {
                            setUserShiftInfo({
                                ...userShiftInfo,
                                firstTicketNumber: e.target.value
                            })
                            setError({ ...error, firstTicketNumber: "" })
                        }}
                    />
                    {error.firstTicketNumber && (
                        <div className="invalid-feedback">
                            {error.firstTicketNumber}
                        </div>
                    )}
                </div>

                <div>
                    <label className="form-label fw-semibold">Стоимость билета:</label>
                    <input
                        type="number"
                        className={`form-control ${error.ticketPrice ? "is-invalid" : ""}`}
                        value={userShiftInfo.ticketPrice}
                        onChange={(e) => {
                            setUserShiftInfo({
                                ...userShiftInfo,
                                ticketPrice: e.target.value
                            })
                            setError({ ...error, ticketPrice: "" })
                        }}
                    />
                    {error.ticketPrice && (
                        <div className="invalid-feedback">
                            {error.ticketPrice}
                        </div>
                    )}
                </div>

                <div>
                    <label className="form-label fw-semibold">Время открытия:</label>
                    <input
                        type="datetime-local"
                        className={`form-control ${error.openDateTime ? "is-invalid" : ""}`}
                        value={userShiftInfo.openDateTime}
                        onChange={(e) => {
                            setUserShiftInfo({
                                ...userShiftInfo,
                                openDateTime: e.target.value
                            })
                            setError({ ...error, openDateTime: "" })
                        }}
                    />
                    {error.openDateTime && (
                        <div className="invalid-feedback">
                            {error.openDateTime}
                        </div>
                    )}
                </div>

                <div className="d-flex gap-2">
                    <button type="button" className="btn btn-outline-primary w-50" onClick={() => navigate(-1)}>
                        Назад
                    </button>
                    <button type="submit" className="btn btn-primary w-100">
                        Применить
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ShiftUpdate