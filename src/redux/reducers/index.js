import { combineReducers } from "redux";
import LoginReducer from "./LoginReducers";
import SchedulesReducers from './SchedulesReducer';

const Reducers = combineReducers({
    schedules: SchedulesReducers,
    login : LoginReducer
})

export default Reducers;