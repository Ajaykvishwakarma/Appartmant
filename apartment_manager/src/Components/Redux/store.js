import {createStore, combineReducers} from "redux";
import { cityReducer } from "./CityAdd/reducer";
import { countyReducer } from "./CountryAdd/reducer";

const rootReducer = combineReducers({
    city : cityReducer,
    country :countyReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());