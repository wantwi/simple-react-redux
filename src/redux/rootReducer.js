import cakeReducer from "./Cakes/CakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import userReducer from "./users/userReducer"
import {combineReducers} from "redux"


const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    users:userReducer
})


export default rootReducer