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
                    <Route path={`${Const.routes.employees}`} element={<Employees/>}/>
                    <Route path={`${Const.routes.employeeInfo}/:id`} element={<EmployeeInfo/>}/>

                    <Route path={`${Const.routes.activeShifts}`} element={<ActiveShifts/>}/>
                    <Route path={`${Const.routes.closedShifts}`} element={<ClosedShifts/>}/>
                    
                    <Route path={`${Const.routes.activeShiftInfo.cars}/:id`} element={<ActiveCarsShiftsInfo/>}/>
                    <Route path={`${Const.routes.activeShiftInfo.food}/:id`} element={<ActiveFoodShiftsInfo/>}/>
                    <Route path={`${Const.routes.activeShiftInfo.train}/:id`} element={<ActiveTrainShiftsInfo/>}/>
                    
                    <Route path={`${Const.routes.activeShiftInfoUpdate.cars}/:id`} element={<ActiveCarsShiftInfoUpdate/>}/>
                    <Route path={`${Const.routes.activeShiftInfoUpdate.food}/:id`} element={<ActiveFoodShiftInfoUpdate/>}/>
                    <Route path={`${Const.routes.activeShiftInfoUpdate.train}/:id`} element={<ActiveTrainShiftInfoUpdate/>}/>


                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App