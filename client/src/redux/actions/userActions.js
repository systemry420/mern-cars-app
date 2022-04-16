import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const userLogin = (requestObject) => async dispatch => {
    let navigate = useNavigate()

    try {
        console.log(requestObject);
        const response = await axios.post('/api/users/login', requestObject)
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data))
        window.location.href = '/'
        navigate('/', { replace: true})
    } catch (error) {
        
    }
}


export const userRegister = (requestObject) => async dispatch => {
    try {
        console.log(requestObject);
        const response = await axios.post('/api/users/register', requestObject)
        console.log(response);

    } catch (error) {
        
    }
}