import { Routes, Route } from "react-router-dom"
import Index from "./Index"
import Layout from "../assets/Layout"
import NotFound from "./NotFound"
import Const from "../assets/Const"
import Employees from "./Employees/Employees"
import EmployeeInfo from "./Employees/EmployeeInfo"
import ActiveShifts from "./Shifts/ActiveShifts"
import ActiveCarsShiftsInfo from "./Shifts/Shift/Info/Active/ActiveCarsShiftInfo"
import ActiveFoodShiftsInfo from "./Shifts/Shift/Info/Active/ActiveFoodShiftInfo"
import ActiveTrainShiftsInfo from "./Shifts/Shift/Info/Active/ActiveTrainShiftInfo"
import ActiveCarsShiftInfoUpdate from "./Shifts/Shift/Update/Active/ActiveCarsShiftUpdate"
import ActiveFoodShiftInfoUpdate from "./Shifts/Shift/Update/Active/ActiveFoodShiftUpdate"
import ActiveTrainShiftInfoUpdate from "./Shifts/Shift/Update/Active/ActiveTrainShiftUpdate"
import ClosedShifts from "./Shifts/ClosedShifts"

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Index />} />
                    <Route path={`${Const.employeesUrl}`} element={<Employees/>}/>
                    <Route path={`${Const.employeeInfoUrl}/:id`} element={<EmployeeInfo/>}/>

                    <Route path={`${Const.activeShiftsUrl}`} element={<ActiveShifts/>}/>
                    <Route path={`${Const.closedShiftsUrl}`} element={<ClosedShifts/>}/>
                    
                    <Route path={`${Const.activeCarsShiftInfoUrl}/:id`} element={<ActiveCarsShiftsInfo/>}/>
                    <Route path={`${Const.activeFoodShiftInfoUrl}/:id`} element={<ActiveFoodShiftsInfo/>}/>
                    <Route path={`${Const.activeTrainShiftInfoUrl}/:id`} element={<ActiveTrainShiftsInfo/>}/>
                    
                    <Route path={`${Const.activeCarsShiftInfoUpdateUrl}/:id`} element={<ActiveCarsShiftInfoUpdate/>}/>
                    <Route path={`${Const.activeFoodShiftInfoUpdateUrl}/:id`} element={<ActiveFoodShiftInfoUpdate/>}/>
                    <Route path={`${Const.activeTrainShiftInfoUpdateUrl}/:id`} element={<ActiveTrainShiftInfoUpdate/>}/>


                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App