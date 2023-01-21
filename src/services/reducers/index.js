import {combineReducers} from 'redux'  // multipe reducers ko merge karne ke lia redux ko import karte hai.
import cardItem from "./reducer";
// import users from './reducer'

export default combineReducers({
    cardItem,
    // users          //anne wale time me merge karenge
});