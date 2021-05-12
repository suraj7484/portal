import { GET_METHOD_COUNTRY  } from './types'
import axios from 'axios'

export const fetchCountry = () => dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => dispatch({
        type : GET_METHOD_COUNTRY,
        data  : res.data
    }))
    .catch((err) => console.log(err))
}

