import { GET_METHOD } from './types'
import axios from 'axios'

export const fetchServices = () => dispatch => {
    axios.get(`http://demo4.omkatech.com/get-All-User-Data`).then((res) => dispatch ({
        type : GET_METHOD,
        data : res.data.data
    }))
    .catch((err) => console.log(err))
}
