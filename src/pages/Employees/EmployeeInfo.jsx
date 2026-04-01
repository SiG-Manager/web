import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usersWebClient } from "../../api/webClients";

const TOKEN = ""

function EmployeeInfo() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [info, setInfo] = useState({})

    useEffect(() => {
        async function loadEmployee(id) {
            try {
                setIsLoading(true)
                var info = await usersWebClient.getById(id, TOKEN)
                setInfo(info)

            } catch (error) {
                setError("Сотрудник не найден")
            } finally {
                setIsLoading(false)
            }
        }

        if (id) {
            loadEmployee(id)
        }
        else {
            setError("Сотрудник не найден")
        }
    }, [id])

    const updateInfo = async () => {
        try {
            setIsLoading(true)
            var info = await usersWebClient.getById(id, TOKEN)
            setInfo(info)
        } catch (error) {
            setError("Сотрудник не найден")
        } finally {
            setIsLoading(false)
        }
    }

    const handleUp = async () => {
        try {
            setIsLoading(true)
            await usersWebClient.update(id, { role: "Employee" }, TOKEN)
            updateInfo()
        } catch (error) {
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }
    const handleDown = async () => {
        try {
            setIsLoading(true)
            await usersWebClient.update(id, { role: "Unregistered" }, TOKEN)
            updateInfo()
        } catch (error) {
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    if (!error)
        return (
            <>
                <div className="row fs-4">
                    <table className="table table-alt table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>ID:</td>
                                <td className="fw-semibold">{info.id}</td>
                            </tr>
                            <tr>
                                <td>Имя:</td>
                                <td className="fw-semibold">{info.firstName}</td>
                            </tr>
                            <tr>
                                <td>Фамилия: </td>
                                <td className="fw-semibold">{info.lastName}</td>
                            </tr>
                            <tr>
                                <td>Уровень прав: </td>
                                <td className="fw-semibold">{info.role}</td>
                            </tr>
                            <tr>
                                <td>Пароль:</td>
                                <td className="d-flex justify-content-center">
                                    <button className="btn w-100 btn-outline-primary fw-semibold">Изменить</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex mt-2 gap-1">
                    <button className="btn btn-primary w-100">Отредактировать</button>
                    {info.role?.toLowerCase() != "unregistered" && <button onClick={(e) => { handleDown() }} className="btn btn-danger w-50">Ограничить</button>}
                    {info.role?.toLowerCase() == "unregistered" && <button onClick={(e) => { handleUp() }} className="btn btn-success w-50">Повысить</button>}
                </div>
            </>
        )

    return (
        <div className="display-2 text-center mt-5">
            Сотрудник не найден
        </div>
    )
}

export default EmployeeInfo