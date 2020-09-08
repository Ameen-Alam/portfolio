
class AuthAction {
    //------- For Epics ------
    static CREATE_USER = 'CREATE_USER';
    static LOGIN_USER = 'LOGIN_USER';
    static PROFILE = 'PROFILE';
    static EDIT_PROFILE = 'EDIT_PROFILE';
    static LOGOUT = 'LOGOUT'
    
    //------- For Reducer ------
    static AUTH_LOGIN = 'AUTH_LOGIN'
    static GET_PROFILE = 'GET_PROFILE'
    static GET_EDIT_PROFILE = 'GET_EDIT_PROFILE'
    static GET_LOGOUT = 'GET_LOGOUT'



    //------- For Epics ------
    static createUser = (obj) => { return { type: AuthAction.CREATE_USER, payload: obj } }
    static loginUser = (obj) => { return { type: AuthAction.LOGIN_USER, payload: obj } }
    static profile = (uid) => { return { type: AuthAction.PROFILE, payload: uid } }
    static editProfile = (obj) => { return { type: AuthAction.EDIT_PROFILE, payload: obj } }
    static logout = (prop) => { return { type: AuthAction.LOGOUT, payload: prop } }

    //------- For Reducer ------xxx

}

export default AuthAction;