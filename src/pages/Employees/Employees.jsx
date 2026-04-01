import { useEffect, useState } from "react"
import { usersWebClient } from "../../api/usersWebClient"
import { Link } from "react-router-dom"
import Const from "../../assets/Const"

const TOKEN = ""

function Employees() {
    const [employees, setEmployees] = useState([])
    const [filteredEmployees, setFilteredEmployees] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        async function loadEmployees() {
            setIsLoading(true)
            try {
                const data = await usersWebClient.getAll(TOKEN)
                setEmployees(data)
                setFilteredEmployees(data)
            } catch (error) {
                alert(error)
            } finally {
                setIsLoading(false)
            }
        }

        loadEmployees()
    }, [])

    useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredEmployees(employees)
            return
        }

        const filtered = employees.filter(e => {
            const term = searchTerm.toLowerCase()
            return (
                e.firstName?.toLowerCase().includes(term) ||
                e.lastName?.toLowerCase().includes(term) ||
                e.role?.toLowerCase().includes(term)
            )
        })

        setFilteredEmployees(filtered)
    }, [searchTerm, employees])

    const handleRevoke = async (id) => {
        try {
            if (window.confirm("Вы собираетесь запретить этому сотруднику пользоваться этим сайтом\nВы уверены?")) {
                await usersWebClient.update(id, { role: "Unregistered" }, TOKEN)
                const newUsers = await usersWebClient.getAll(TOKEN)
                setEmployees(newUsers)
            }

        } catch (error) {
            alert(error)
        }
    }

    const handleUp = async (id) => {
        try {
            if (window.confirm("Вы собираетесь разрешить этому сотруднику пользоваться этим сайтом\nВы уверены?")) {
                await usersWebClient.update(id, { role: "Employee" }, TOKEN)
                const newUsers = await usersWebClient.getAll(TOKEN)
                setEmployees(newUsers)
            }

        } catch (error) {
            alert(error)
        }
    }

    if (isLoading) return (
        <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
            <span className=" spinner-border" style={{ height: "50px", width: "50px" }}></span>
            <h2 className="display-4">Загрузка...</h2>
        </div>
    )


    return (
        <div>
            <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-2"
            />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="pc-visible">Имя</th>
                        <th className="pc-visible">Фамилия</th>
                        <th className=" phone-visible">Имя<br />Фамилия</th>
                        <th className="">Роль</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map((element) => (
                        <tr key={element.id}>
                            <td className="pc-visible">{element.firstName}</td>
                            <td className="pc-visible">{element.lastName}</td>
                            <td className="phone-visible">{element.firstName}<br />{element.lastName}</td>
                            <td className="">{element.role}</td>
                            <td>
                                <div className={`d-flex justify-content-center gap-1 ${isMobile ? "flex-column" : ""}`}>
                                    <Link className="btn btn-primary ps-1 pe-1 p-0" to={`${Const.employeeInfoUrl}/${element.id}`}>
                                        <label className="bi-person-fill"> Инфо</label>
                                    </Link>
                                    {element.role.toLowerCase() != "unregistered" &&
                                        <button className="btn btn-danger ps-1 pe-1 p-0" onClick={(e) => { handleRevoke(element.id) }}>
                                            <label className=" bi-caret-down-fill"> Ограничить</label>
                                        </button>
                                    }
                                    {element.role.toLowerCase() == "unregistered" &&
                                        <button className="btn btn-success ps-1 pe-1 p-0" onClick={(e) => { handleUp(element.id) }}>
                                            <label className=" bi-caret-up-fill"> Повысить</label>
                                        </button>
                                    }

                                </div>
                            </td>
                        </tr>
                    ))}
                    {filteredEmployees.length === 0 && (
                        <tr >
                            <td colSpan="6">
                                Список сотрудников пуст
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Employees