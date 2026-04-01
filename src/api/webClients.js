import ApiConst from "./base/apiConst";
import { crudFabric } from "./base/crudFabric";

export const activeShiftsWebClient = {
    cars: crudFabric.createCrudMethods(
        ApiConst.endpoints.activeShifts.cars, 
        ApiConst.createTemplates.activeShifts.cars, 
        ApiConst.updateTemplates.activeShifts.cars
    ),

    food: crudFabric.createCrudMethods(
        ApiConst.endpoints.activeShifts.food, 
        ApiConst.createTemplates.activeShifts.food, 
        ApiConst.updateTemplates.activeShifts.food
    ),

    train: crudFabric.createCrudMethods(
        ApiConst.endpoints.activeShifts.train, 
        ApiConst.createTemplates.activeShifts.train, 
        ApiConst.updateTemplates.activeShifts.train
    )
}

export const closedShiftsWebClient = {
    cars: crudFabric.createCrudMethods(
        ApiConst.endpoints.closedShifts.cars, 
        ApiConst.createTemplates.closedShifts.cars, 
        ApiConst.updateTemplates.closedShifts.cars
    ),

    food: crudFabric.createCrudMethods(
        ApiConst.endpoints.closedShifts.food, 
        ApiConst.createTemplates.closedShifts.food, 
        ApiConst.updateTemplates.closedShifts.food
    ),

    train: crudFabric.createCrudMethods(
        ApiConst.endpoints.closedShifts.train, 
        ApiConst.createTemplates.closedShifts.train, 
        ApiConst.updateTemplates.closedShifts.train
    )
}

export const usersWebClient = crudFabric.createCrudMethods(ApiConst.endpoints.users, ApiConst.createTemplates.user, ApiConst.updateTemplates.user)