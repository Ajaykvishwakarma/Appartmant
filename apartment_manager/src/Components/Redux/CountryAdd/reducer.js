import { ADD_COUNTRY } from "./action";
const initState = {
    
    country:[],
}
export const countyReducer = (store = initState, {type, payload}) => {

    // console.log("Store", store)

switch (type) {
    case ADD_COUNTRY: 
    return {store, country: payload}

        default:
            return store;
}
}