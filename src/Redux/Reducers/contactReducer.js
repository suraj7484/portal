import { GET_METHOD_USER_DATA} from '../Actions/types'

const initalState = {
    Loader : false,
    userData : []
}

export default function (state = initalState , action) {
    switch(action.type){

        case GET_METHOD_USER_DATA :
        return {
            ...state,
            Loader : true,
            userData : action.data
        }
        default : 
        return state;
    }
}