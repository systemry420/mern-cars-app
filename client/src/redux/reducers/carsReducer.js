import { Action } from "redux"
import { ADD } from "../actions/carsActions";

const initState = {
    cars: []
}

export const carsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_CARS':
            return {
                ...state,
                cars: action['payload']
            }
    
        default:
            return state
    }
}