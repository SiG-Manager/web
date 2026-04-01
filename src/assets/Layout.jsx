import { useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import Const from "./Const";

function Layout() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [pageTitle, setPageTitle] = useState("")
    const location = useLocation()

    const [isExpanded, setIsExpanded] = useState(false)
    const navRef = useRef(null);
    const [darkTheme, setDarkTheme] = useState(false)

    const handleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        if (darkTheme)
            document.documentElement.setAttribute('data-theme', 'dark');
        else
            document.documentElement.setAttribute('data-theme', 'light');

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        setPageTitle(Const.getPageTitle(location.pathname));
    }, [location.pathname])

    return (
        <div className="d-flex flex-column">
            <div className={`bg-primary d-flex align-items-center p-2 ${isMobile ? "" : "ps-3"}`}>
                <h2 className="fw-semibold" style={{ transform: isMobile ? "" : "translateX(74px)" }}>{pageTitle}</h2>
            </div>
            <div ref={navRef} className="min-vh-100 position-fixed d-flex flex-column bg-primary"
                style={{
                    width: "240px",
                    zIndex: 100,
                    boxShadow: isExpanded ? "0 0 0 100vw rgba(0, 0, 0, 0.5)" : "0 0 0 100vw transparent",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    transform: isExpanded ? `translateX(0)` : `translateX(-250px)`,
                    top: isMobile ? "0" : "",
                    isolation: "isolate"
                }}>
                <div className={`w-100 ${isMobile ? "pt-2 ps-1" : "ps-2 pe-2 pt-1"}`} style={{ width: "250px" }}>
                    <button className="btn" onClick={handleExpand}>
                        <div className="d-flex align-items-center">
                            <i className=" fs-2 bi-list"></i>
                            <label className="fs-4 ms-2 fw-semibold text-nowrap">ParkShift</label>
                        </div>
                    </button>
                    <Link className="btn text-decoration-none w-100" to={`${Const.indexUrl}`} onClick={handleExpand}>
                        <div className="d-flex align-items-center">
                            <i className=" fs-2 bi-house-fill"></i>
                            <label className="fs-5 ms-2 ">Главная</label>
                        </div>
                    </Link>
                    <Link className="btn text-decoration-none w-100" to={`${Const.employeesUrl}`} onClick={handleExpand}>
                        <div className="d-flex align-items-center">
                            <i className=" fs-2 bi-people-fill "></i>
                            <label className="fs-5 ms-2 ">Сотрудники</label>
                        </div>
                    </Link>
                    <Link className="btn text-decoration-none d-flex align-items-center w-100" to={`${Const.scheduleUrl}`} onClick={handleExpand}>
                        <div className="d-flex align-items-center">
                            <i className=" fs-2 bi-calendar-event "></i>
                            <label className="fs-5 ms-2 ">График</label>
                        </div>
                    </Link>
                    <Link className="btn text-decoration-none d-flex align-items-center w-100" to={`${Const.activeShiftsUrl}`} onClick={handleExpand}>
                        <div className="d-flex align-items-center">
                            <i className=" fs-2 bi-list-ul "></i>
                            <label className="fs-5 ms-2 ">Активные смены</label>
                        </div>
                    </Link>
                    <Link className="btn text-decoration-none d-flex align-items-center w-100" to={`${Const.closedShiftsUrl}`} onClick={handleExpand}>
                        <div className="d-flex align-items-center">
                            <i className=" fs-2 bi-list-check "></i>
                            <label className="fs-5 ms-2 ">Отчёты</label>
                        </div>
                    </Link>
                    <button className="btn text-decoration-none" onClick={handleThemeChange}>
                        <div className="d-flex align-items-center">
                            <i className={`fs-2 ${darkTheme ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
                            <label className="fs-5 ms-2 ">Изменить тему</label>
                        </div>
                    </button>
                </div>
            </div>
            <div className={`nav bg-primary`} style={{zIndex: "10"}}>

                <div className={`d-flex align-items-start ${isMobile ? "min-vw-100 justify-content-around" : "flex-column ps-2 pe-2 pt-1 "}`}>
                    <button className="btn" onClick={handleExpand}>
                        <i className=" fs-2 bi-list "></i>
                    </button>
                    <Link className="btn text-decoration-none" to={`${Const.indexUrl}`}>
                        <i className=" fs-2 bi-house-fill "></i>
                    </Link>
                    <Link className="btn text-decoration-none pc-visible" to={`${Const.employeesUrl}`}>
                        <i className=" fs-2 bi-people-fill "></i>
                    </Link>
                    <Link className="btn text-decoration-none" to={`${Const.scheduleUrl}`}>
                        <i className=" fs-2 bi-calendar-event "></i>
                    </Link>
                    <Link className="btn text-decoration-none pc-visible" to={`${Const.activeShiftsUrl}`}>
                        <i className=" fs-2 bi-list-ul"></i>
                    </Link>
                    <Link className="btn text-decoration-none pc-visible" to={`${Const.closedShiftsUrl}`}>
                        <i className=" fs-2 bi-list-check "></i>
                    </Link>
                    <button className="btn text-decoration-none pc-visible" onClick={handleThemeChange}>
                        <i className={`fs-2 ${darkTheme ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
                    </button>
                </div>
            </div>

            <div className={`mb-5 ${isMobile ? "" : "p-2"}`}
                style={{
                    width: isMobile ? "" : "calc(100% - 74px)",
                    transform: isMobile ? "" : "translateX(74px)",
                    zIndex: 1
                }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout