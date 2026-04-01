import { Routes, Route } from "react-router-dom"
import Index from "./Index"
import Layout from "../assets/Layout"
import NotFound from "./NotFound"
import Const from "../assets/Const"
import Employees from "./Employees/Employees"
import EmployeeInfo from "./Employees/EmployeeInfo"
import ActiveShifts from "./Shifts/ActiveShifts"
import ClosedShifts from "./Shifts/ClosedShifts"
import ShiftInfo from "./Shifts/ShiftInfo"
import UpdateShiftInfo from "./Shifts/UpdateShiftInfo"

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Index />} />
                    <Route path={`${Const.routes.employees}`} element={<Employees/>}/>
                    <Route path={`${Const.routes.employeeInfo}/:id`} element={<EmployeeInfo/>}/>

                    <Route path={`${Const.routes.activeShifts}`} element={<ActiveShifts/>}/>
                    <Route path={`${Const.routes.closedShifts}`} element={<ClosedShifts/>}/>
                    
                    <Route path={`${Const.routes.shiftInfo}/:state/:type/:id`} element={<ShiftInfo/>}/>
                    <Route path={`${Const.routes.shiftInfo}/:state/:type/:id/update`} element={<UpdateShiftInfo/>}/>

                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App