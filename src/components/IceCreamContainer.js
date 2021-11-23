import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {buyIceCream} from "../redux/iceCream/iceCreamAction"


function IceCreamContainer() {
    const  dispatch = useDispatch()
    
        const {numOfIceCream} = useSelector(state => state.iceCream)
     

    return (
        <div>
            <h2>Numbeer of cake {numOfIceCream}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Ice cream</button>

        </div>
    )
}


export default IceCreamContainer
