import { GET_METHOD_BUDGET } from './types'
import axios from 'axios'




export const fetchBudget = () => dispatch => {
    axios.get(`http://demo4.omkatech.com/getBudgetData`).then((res) => dispatch ({
        type : GET_METHOD_BUDGET,
        data : res.data.data
    }))
    .catch((err) => console.log(err))
}