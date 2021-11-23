export const iceCreamType = {
    BUY_ICECREAM:'BUY_ICECREAM'
}

const {BUY_ICECREAM} = iceCreamType

export const buyIceCream = ()=>{
    return{
        type:BUY_ICECREAM
    }
}