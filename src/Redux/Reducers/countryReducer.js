import {GET_METHOD_COUNTRY , GET_METHOD_USER_DATA} from '../Actions/types'

const initalState = {
    Loader : false,
    country : [],
    userData : []
}

export default function (state = initalState , action) {
    switch(action.type){
        case GET_METHOD_COUNTRY :
        return {
            ...state,
            Loader : true,
            country : action.data
        }

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