import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {buyCake} from "../redux/Cakes/CakeActions"


function CakeContainer() {
    const  dispatch = useDispatch()
    
        const {numOfCakes} = useSelector(state => state.cake)
        console.log({numOfCakes})

    return (
        <div>
            <h2>Numbeer of cake {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>

        </div>
    )
}

export default CakeContainer
