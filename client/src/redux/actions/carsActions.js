import axios from 'axios'

export const ADD = 'ADD'

export const getCars = async () => {
    try {
        const response = await axios.get('/api/cars')
        const cars = response['data']
        
    } catch (err) {
        console.log(err);
    }
}