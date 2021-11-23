import axios from "axios";

export const userType = {
  FUR: "FUR",
  FUS: "FUS",
  FUF: "FUF",
};

const { FUR, FUS, FUF } = userType;

export const fetchUsersRequest = () => {
  return {
    type: FUR,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FUS,
    payload: users,
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: FUF,
    payload: error,
  };
};


export const fetchUsers =  () =>{

    
    return (dispatch)=>{

            dispatch(fetchUsersRequest())

            axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{

              
                const result = res.data
                dispatch(fetchUsersSuccess(result))
            }).catch(err =>{
              
                const errMsg = err.message
                dispatch(fetchUsersFail(errMsg))
            })
    }

}
