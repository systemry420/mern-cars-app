import axios from 'axios'

export const ADD = 'ADD'

export const getCars = () => async dispatch => {

    try {
        const response = await axios.get('/api/cars')
        const cars = response['data']
        dispatch({type: 'GET_CARS', payload: cars})
    } catch (err) {
        console.log(err);
    }
}