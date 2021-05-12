import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import countryReducer from './countryReducer';
import contactReducer from './contactReducer';
import budgetReducer from './budgetReducer';
import aboutReducer from './aboutReducer';

export default combineReducers({
    services : sessionReducer,
    budget : budgetReducer,
    country  : countryReducer,
    userData : contactReducer,
    touchData : aboutReducer
});