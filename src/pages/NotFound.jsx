import { Link } from "react-router-dom"
import Const from "../assets/Const"

function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center gap-1">
            <h1 className=" display-1 text-center mt-5">404</h1>
            <h4 className=" display-5 text-center">Страница не найдена</h4>
            <Link className="btn btn-primary mt-3"
                to={`${Const.routes.index}`}>
                <label className=" display-6 fs-4">
                    На главную
                </label>
            </Link>
        </div>
    )
}

export default NotFound