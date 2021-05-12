import { GET_METHOD_ABOUT_TOUCH} from '../Actions/types'

const initalState = {
    Loader : false,
    touchData : []
}

export default function (state = initalState, action) {
    switch(action.type) {
        case GET_METHOD_ABOUT_TOUCH : 
        return {
            ...state,
            Loader : true,
            touchData : action.data
        }
        default : 
        return state;
    }
 
}