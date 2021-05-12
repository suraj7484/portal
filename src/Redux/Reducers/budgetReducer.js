import { GET_METHOD_BUDGET} from '../Actions/types'

const initalState = {
    Loader : false,
    budget : []
}

export default function (state = initalState, action) {
    switch(action.type) {
        case GET_METHOD_BUDGET : 
        return {
            ...state,
            Loader : true,
            budget : action.data
        }
        default : 
        return state;
    }
 
}