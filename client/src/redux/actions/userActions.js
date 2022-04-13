import axios from 'axios'

export const userLogin = (requestObject) => async dispatch => {
    try {
        console.log(requestObject);
        const response = await axios.post('/api/users/login', requestObject)
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data))

    } catch (error) {
        
    }
}


export const userRegister = (requestObject) => async dispatch => {
    try {
        console.log(requestObject);
        const response = await axios.post('/api/users/login', requestObject)
        console.log(response);
    } catch (error) {
        
    }
}