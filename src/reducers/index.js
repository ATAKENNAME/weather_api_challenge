import updateWeatherReducer from "./updateWeather";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    weather:updateWeatherReducer,
})

export default rootReducer;