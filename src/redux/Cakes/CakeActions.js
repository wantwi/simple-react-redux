export const cakeType = {
    BUY_CAKE:'BUY_CAKE'
}

const {BUY_CAKE} = cakeType

export const buyCake = ()=>{
    return{
        type:BUY_CAKE
    }
}