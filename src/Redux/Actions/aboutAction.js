import { GET_METHOD_ABOUT_TOUCH } from './types'
import axios from 'axios'

export const fetchAboutData = () => dispatch => {
    axios.get(`http://demo4.omkatech.com/getAboutTouchData`).then((res) => dispatch ({
        type : GET_METHOD_ABOUT_TOUCH,
        data : res.data.data
    }))
    .catch((err) => console.log(err))
}
