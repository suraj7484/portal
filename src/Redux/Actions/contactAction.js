import {  GET_METHOD_USER_DATA  } from './types'
import axios from 'axios'



export const fetchUserDataCountry = () => dispatch => {
    axios.get('https://cors-anywhere.herokuapp.com/demo4.omkatech.com/getuserData').then((res) => dispatch({
        type : GET_METHOD_USER_DATA,
        data  : res.data.data
    }))
    .catch((err) => console.log(err))
}