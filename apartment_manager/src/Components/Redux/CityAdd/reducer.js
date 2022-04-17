import { ADD_CITY } from "./action";
const initState = {
    
    city:[],
}
export const cityReducer = (store = initState, {type, payload}) => {

    // console.log("Store", store)

switch (type) {
    case ADD_CITY: 
    return {store, city: payload}

        default:
            return store;
}
}