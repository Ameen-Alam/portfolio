import { AuthAction } from "../actions";

let AuthState = {
    profile: {},
    LoginSuccess: false
}

let AuthReducer = (state = AuthState, action) => {
    switch (action.type) {

        case AuthAction.GET_PROFILE:
            return ({
                ...state,
                profile: action.payload
            })
        case AuthAction.GET_EDIT_PROFILE:
            return ({
                ...state,
                profile: action.payload
            })
        case AuthAction.GET_LOGOUT:
            return ({
                profile: {},
                LoginSuccess: false
            })
        case AuthAction.AUTH_LOGIN:
            return ({
                ...state,
                LoginSuccess: true
            })
        default:
            return state
    }
}
export default AuthReducer; 