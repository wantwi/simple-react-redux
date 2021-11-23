import {iceCreamType} from "./iceCreamAction"

const {BUY_ICECREAM} = iceCreamType

const initState = {
    numOfIceCream: 10
}


const iceCreamReducer = (state =initState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,numOfIceCream: state.numOfIceCream -1
            }
    
        default:
           return state
    }
}



export default iceCreamReducer;