import { Observable } from 'rxjs'
import { AuthAction } from "../actions";
import history from '../../Routes/History'
import firebase from '../config'


class AuthEpic {
    static createUser = (action$) => {
        return action$.ofType(AuthAction.CREATE_USER)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((res) => {
                        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then((response) => {
                            console.log('Succesfully');
                            history.push('/auth')
                        }).catch((error) => {
                            console.log(error.message)
                        })
                        delete payload.password
                        // return ({
                        //     type: AuthAction.AUTH_LOGIN
                        // })
                        payload.uid = res.uid
                        payload.date = Date.now()
                        firebase.database().ref('/').child(`users/${res.uid}/profile/`).set(payload);
                        localStorage.setItem('userToken', JSON.stringify(res.uid))
                        console.log(res, 'res')
                    }).catch((err) => {
                        console.log(err.message);
                        // return ({
                        //     type: null
                        // })
                    })
                )
                    .map((x) => {
                        return { type: AuthAction.AUTH_LOGIN }
                    })
            })
    }

    static loginUser = (action$) => {
        return action$.ofType(AuthAction.LOGIN_USER)
            .switchMap(({ payload, auth }) => {
                return Observable.fromPromise(
                    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                        .then((res) => {
                            localStorage.setItem('userToken', JSON.stringify(res.uid))
                            alert('Succesfully');
                            history.push('/auth')
                            return ({
                                type: AuthAction.AUTH_LOGIN
                            })
                        }).catch((err) => {
                            alert(err.message)
                            return { type: null };
                        })
                )
                // .map((x) => {
                //     return { type: AuthAction.ALL_USERS }
                // })
            })
    }


    static profile = (action$) => {
        return action$.ofType(AuthAction.PROFILE)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    firebase.database().ref(`users/${payload}/profile`).once('value')
                        .then((res) => {
                            console.log('your account is already save');
                            return { type: AuthAction.GET_PROFILE, payload: res.val() };
                        }).catch((err) => {
                            console.log(err.message)
                            return { type: null };
                        })
                )
            })
    }
    static editProfile = (action$) => {
        return action$.ofType(AuthAction.EDIT_PROFILE)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    firebase.database().ref(`users/${payload.uid}/profile`).set(payload)
                        .then(() => {
                            console.log('your account is Update');
                            return { type: AuthAction.GET_EDIT_PROFILE, payload: payload };
                        }).catch((err) => {
                            console.log(err.message)
                            return { type: null };
                        })
                )
                // .map((x) => {
                //     return { type: AuthAction.GET_EDIT_PROFILE, payload: payload };
                // })
            })
    }

    static logout = (action$) => {
        return action$.ofType(AuthAction.LOGOUT)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    firebase.auth().signOut().then((res) => {
                        localStorage.removeItem('userToken')
                        localStorage.clear()
                        alert('LOgout');
                        history.push('/')
                        return { type: AuthAction.GET_LOGOUT };
                    }).catch((err) => {
                        alert(err.message);
                        return { type: null };
                    })
                )
                    .map((x) => {
                        return { type: AuthAction.GET_LOGOUT };
                    })
            })
    }

}



export default AuthEpic;