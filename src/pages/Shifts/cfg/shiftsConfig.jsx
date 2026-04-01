import { activeShiftsWebClient, closedShiftsWebClient } from "../../../api/webClients";
import Const from "../../../assets/Const";

export const shiftClients = {
    active: {
        cars: activeShiftsWebClient.cars,
        food: activeShiftsWebClient.food,
        train: activeShiftsWebClient.train,
    },

    closed: {
        cars: closedShiftsWebClient.cars,
        food: closedShiftsWebClient.food,
        train: closedShiftsWebClient.train,
    }
}

export const shiftInfoTemplates = {
    active: {
        cars: (shiftInfo, admin, support) => (
            <>
                <tr>
                    <td>ID:</td>
                    <td className="fw-semibold">{shiftInfo.id}</td>
                </tr>
                <tr>
                    <td>Админ:</td>
                    <td className="fw-semibold">{admin?.firstName} {admin?.lastName}</td>
                </tr>
                <tr>
                    <td>Помощник: </td>
                    <td className="fw-semibold">{support?.firstName} {support?.lastName}</td>
                </tr>
                <tr>
                    <td>Парк: </td>
                    <td className="fw-semibold">{shiftInfo.parkName}</td>
                </tr>
                <tr>
                    <td>Номер первого билета: </td>
                    <td className="fw-semibold">{shiftInfo.firstTicketNumber}</td>
                </tr>
                <tr>
                    <td>Стоимость билета: </td>
                    <td className="fw-semibold">{shiftInfo.ticketPrice}</td>
                </tr>
                <tr>
                    <td>Время открытия: </td>
                    <td className="fw-semibold">{new Date(shiftInfo.openDateTime).toLocaleString()}</td>
                </tr>
            </>
        ),
        food: (shiftInfo, admin) => (
            <>
                <tr>
                    <td>ID:</td>
                    <td className="fw-semibold">{shiftInfo.id}</td>
                </tr>
                <tr>
                    <td>Админ:</td>
                    <td className="fw-semibold">{admin?.firstName} {admin?.lastName}</td>
                </tr>
                <tr>
                    <td>Количество сахара:</td>
                    <td className="fw-semibold">{shiftInfo.sugarAmount} кг</td>
                </tr>
                <tr>
                    <td>Количество цветного сахара:</td>
                    <td className="fw-semibold">{shiftInfo.colorSugarAmount} кг</td>
                </tr>
                <tr>
                    <td>Номер первого билета: </td>
                    <td className="fw-semibold">{shiftInfo.firstTicketNumber}</td>
                </tr>
                <tr>
                    <td>Стоимость билета: </td>
                    <td className="fw-semibold">{shiftInfo.ticketPrice}</td>
                </tr>
                <tr>
                    <td>Время открытия: </td>
                    <td className="fw-semibold">{new Date(shiftInfo.openDateTime).toLocaleString()}</td>
                </tr>
            </>
        ),
        train: (shiftInfo, admin) => (
            <>
                <tr>
                    <td>ID:</td>
                    <td className="fw-semibold">{shiftInfo.id}</td>
                </tr>
                <tr>
                    <td>Админ:</td>
                    <td className="fw-semibold">{admin?.firstName} {admin?.lastName}</td>
                </tr>
                <tr>
                    <td>Количество бензина:</td>
                    <td className="fw-semibold">{shiftInfo.gasAmount} л</td>
                </tr>
                <tr>
                    <td>Номер первого билета: </td>
                    <td className="fw-semibold">{shiftInfo.firstTicketNumber}</td>
                </tr>
                <tr>
                    <td>Стоимость билета: </td>
                    <td className="fw-semibold">{shiftInfo.ticketPrice}</td>
                </tr>
                <tr>
                    <td>Время открытия: </td>
                    <td className="fw-semibold">{new Date(shiftInfo.openDateTime).toLocaleString()}</td>
                </tr>
            </>
        )
    },

    closed: {
        cars: (shiftInfo, admin, support) => (
            <>
                <tr>
                    <td>ID:</td>
                    <td className="fw-semibold">{shiftInfo.id}</td>
                </tr>
                <tr>
                    <td>Админ:</td>
                    <td className="fw-semibold">{shiftInfo.adminId}</td>
                </tr>
                <tr>
                    <td>Помощник: </td>
                    <td className="fw-semibold">{shiftInfo.supportId}</td>
                </tr>
                <tr>
                    <td>Парк: </td>
                    <td className="fw-semibold">{shiftInfo.parkName}</td>
                </tr>
                <tr>
                    <td>Номер первого билета: </td>
                    <td className="fw-semibold">{shiftInfo.firstTicketNumber}</td>
                </tr>
                <tr>
                    <td>Стоимость билета: </td>
                    <td className="fw-semibold">{shiftInfo.ticketPrice}</td>
                </tr>
                <tr>
                    <td>Время открытия: </td>
                    <td className="fw-semibold">{new Date(shiftInfo.openDateTime).toLocaleString()}</td>
                </tr>
            </>
        ),
        food: (shiftInfo, admin, support) => (
            <>
                <tr>
                    <td>ID:</td>
                    <td className="fw-semibold">{shiftInfo.id}</td>
                </tr>
                <tr>
                    <td>Админ:</td>
                    <td className="fw-semibold">{shiftInfo.adminId}</td>
                </tr>
                <tr>
                    <td>Помощник: </td>
                    <td className="fw-semibold">{shiftInfo.supportId}</td>
                </tr>
                <tr>
                    <td>Парк: </td>
                    <td className="fw-semibold">{shiftInfo.parkName}</td>
                </tr>
                <tr>
                    <td>Номер первого билета: </td>
                    <td className="fw-semibold">{shiftInfo.firstTicketNumber}</td>
                </tr>
                <tr>
                    <td>Стоимость билета: </td>
                    <td className="fw-semibold">{shiftInfo.ticketPrice}</td>
                </tr>
                <tr>
                    <td>Время открытия: </td>
                    <td className="fw-semibold">{new Date(shiftInfo.openDateTime).toLocaleString()}</td>
                </tr>
            </>
        ),
        train: (shiftInfo, admin, support) => (
            <>
                <tr>
                    <td>ID:</td>
                    <td className="fw-semibold">{shiftInfo.id}</td>
                </tr>
                <tr>
                    <td>Админ:</td>
                    <td className="fw-semibold">{shiftInfo.adminId}</td>
                </tr>
                <tr>
                    <td>Помощник: </td>
                    <td className="fw-semibold">{shiftInfo.supportId}</td>
                </tr>
                <tr>
                    <td>Парк: </td>
                    <td className="fw-semibold">{shiftInfo.parkName}</td>
                </tr>
                <tr>
                    <td>Номер первого билета: </td>
                    <td className="fw-semibold">{shiftInfo.firstTicketNumber}</td>
                </tr>
                <tr>
                    <td>Стоимость билета: </td>
                    <td className="fw-semibold">{shiftInfo.ticketPrice}</td>
                </tr>
                <tr>
                    <td>Время открытия: </td>
                    <td className="fw-semibold">{new Date(shiftInfo.openDateTime).toLocaleString()}</td>
                </tr>
            </>
        )
    }
}