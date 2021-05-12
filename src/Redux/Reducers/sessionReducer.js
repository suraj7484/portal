import {GET_METHOD } from '../Actions/types'

const initalState = {
    Loader : false,
    services : [],
}

export default function (state = initalState, action) {
    switch(action.type) {
        case GET_METHOD : 
        return {
            ...state,
            Loader : true,
            services : action.data
        }
        default : 
        return state;
    }
 
}