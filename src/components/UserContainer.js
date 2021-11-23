import React,{useEffect} from 'react'
import {fetchUsers} from  "../redux/users/userAction"
import {useDispatch,useSelector} from "react-redux"
function UserContainer() {

    const dispatch = useDispatch()

    const {users} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>

            {
                users.map((user,index)=> <h4 key={index}>{user?.name}</h4>)
            }
            
        </div>
    )
}

export default UserContainer
