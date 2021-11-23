import { userType } from "./userAction";

const { FUF, FUR, FUS } = userType;

const initState = {
  loading: false,
  error: "",
  users: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FUR:
      return {
        ...state,
        loading: true,
      };
    case FUS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FUF:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
