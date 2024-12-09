
const initialState = {
  store: [],
  theme: "light",
  loading : { store : false, auth : false },
  error : { store : null, auth : null },
  auth : {
    isRegistered : false,
    isLoggedIn : false,
    token : null
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STORE_REQUEST":
    return { ...state, loading: {...state.loading, store: true } }
    case "FETCH_STORE_SUCCESS":
    return { ...state, loading: {...state.loading, store: false }, store : action.payload }
    case "FETCH_STORE_FAILURE":
        return {...state, loading : {...state.loading, store: false }, error : {...state.error, store: action.error} }
    case "REGISTER_USER_REQUEST":
    case "LOGIN_USER_REQUEST" :
     return { ...state, loading: {...state.loading, auth : true }}
    case "REGISTER_USER_SUCCESS":
      return { ...state, loading: {...state.loading, auth: false }, auth: {...state.auth, isRegistered: true }}
    case "REGISTER_USER_FAILURE":
    case "LOGIN_USER_FAILURE":
      return {...state, loading : {...state.loading, auth: false }, error : {...state.error, auth: action.error} }
    case "LOGIN_USER_SUCCESS" :
      return { ...state, auth: {...state.auth, isLoggedIn: true, token : action.payload.token }}
    default:
      return state;
  }
};
export default appReducer;
