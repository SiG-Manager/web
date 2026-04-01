import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { shiftClients, shiftInfoTemplates } from "./cfg/shiftsConfig"
import { usersWebClient } from "../../api/webClients"
import Const from "../../assets/Const"

const TOKEN = ""

function ShiftInfo() {
    const { state, type, id } = useParams()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const [shiftInfo, setShiftInfo] = useState({})
    const [admin, setAdmin] = useState()
    const [support, setSupport] = useState()

    useEffect(() => {
        async function loadShiftInfo(state, type, id) {
            try {
                setIsLoading(true)
                const client = shiftClients[state][type]
                const data = await client.getById(id, TOKEN)
                const admin = await usersWebClient.getById(data.adminId)
                
                if (data.supportId) {
                    const support = await usersWebClient.getById(data.supportId)
                    setSupport(support)
                }
                
                setAdmin(admin)
                setShiftInfo(data)
            } catch (error) {
                if (error.toString().includes("NetworkError")) {
                    setError("Ошибка подключения к серверу");
                }
                else if (error.toString().includes("TypeError") || error.toString().includes("HTTP error")) {
                    setError("Такой смены не существует");
                }
                else {
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        loadShiftInfo(state, type, id)
    }, [])

    if (isLoading)
        return (
            <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
                <span className=" spinner-border" style={{ height: "50px", width: "50px" }}></span>
                <h2 className="display-4">Загрузка...</h2>
            </div>
        )

    if (error)
        return (
            <div>
                {error.toString()}
            </div>
        )
    return (
        <>
            <div className="fs-4">
                <table className="table table-alt table-striped table-bordered">
                    <tbody>
                        {shiftInfoTemplates[state][type](shiftInfo, admin, support)}
                    </tbody>
                </table>
                <Link className="w-100 btn btn-primary mt-2" to={`update`}>Изменить</Link>
                <Link className="w-100 btn btn-outline-danger mt-2" to={`update`}>Закрыть смену</Link>
            </div>
        </>
    )
}

export default ShiftInfo