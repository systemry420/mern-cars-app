import { Action } from "redux"
import { ADD } from "../actions/carsActions";

interface Car {
    title: string,

}

const initState = {
    cars: new Array<Car>()
}

export const carsReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case ADD:
            console.log('add');
            
            break;
    
        default:
            return state
    }
}