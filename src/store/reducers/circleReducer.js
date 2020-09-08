import { AuthAction, circleAction } from "../actions";

let CircleState = {
    Groups: {},
    users: {}
}

let CircleReducer = (state = CircleState, action) => {
    switch (action.type) {
        case circleAction.GET_USERS:
            let users = Object.assign({}, state.users)
            users[action.payload.key] = action.payload.obj
            return ({
                ...state,
                users: users
            })
        case circleAction.GET_GROUPS:
            let Groups = Object.assign({}, state.Groups)
            Groups[action.payload.key] = action.payload.obj
            return ({
                ...state,
                Groups: Groups
            })
        case AuthAction.GET_LOGOUT:
            return ({
                Groups: {},
                users: {}
            })
        default:
            return state
    }
}
export default CircleReducer; 