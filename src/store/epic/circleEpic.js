import { circleAction } from '../actions'
import { Observable } from 'rxjs'
import firebase from '../config'

class CircleEpic {
    static createGroup = (actions$) =>
        actions$.ofType(circleAction.CREATE_GROUP)
            .switchMap(({ payload }) => {
                let date = Date.now()
                let key = firebase.database().ref(`group`).push().key
                payload.key = key
                payload.date = date
                return Observable.fromPromise(
                    firebase.database().ref(`groups/${key}/detail`).set(payload).then(() => {
                        firebase.database().ref(`groups/${key}/users/${payload.uid}`).set('admin').then(() => {
                            firebase.database().ref('/').child(`users/${payload.uid}/groups/${key}`).set(date)
                        })
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })

    static AddParticipant = (actions$) =>
        actions$.ofType(circleAction.ADD_PARTICIPANT)
            .switchMap(({ payload }) => {
                let date = Date.now()
                return Observable.fromPromise(
                    firebase.database().ref(`groups/${payload.key}/request/${payload.uid}`).set('user').then(() => {
                        firebase.database().ref('/').child(`users/${payload.uid}/request/${payload.key}`).set(date)
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })

    static acceptRequest = (actions$) =>
        actions$.ofType(circleAction.ACCEPT_REQ)
            .switchMap(({ payload }) => {
                let date = Date.now()
                return Observable.fromPromise(
                    firebase.database().ref(`groups/${payload.key}/users/${payload.uid}`).set('user').then(() => {
                        firebase.database().ref('/').child(`users/${payload.uid}/groups/${payload.key}`).set(date).then(() => {
                            firebase.database().ref(`groups/${payload.key}/request/${payload.uid}`).remove().then(() => {
                                firebase.database().ref(`users/${payload.uid}/request/${payload.key}`).remove()
                            })

                        })
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })

    static cancelRequest = (actions$) =>
        actions$.ofType(circleAction.CANCEL_REQ)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    // 
                )
                    .map((x) => {
                        return { type: null }
                    })
            })

    static leftParticipant = (actions$) =>
        actions$.ofType(circleAction.LEFT_PARTICIPANT)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    // 
                )
                    .map((x) => {
                        return { type: null }
                    })
            })


    static Groups = (action$) =>
        action$.ofType(circleAction.GROUP)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {
                    firebase.database().ref(`groups`).on("child_added", (snapshot) => {
                        let obj = snapshot.val()
                        observer.next({
                            type: circleAction.GET_GROUPS,
                            payload: { key: snapshot.key, obj }
                        })
                    })
                    firebase.database().ref('groups').on("child_changed", (snapshot) => {
                        let obj = snapshot.val()
                        console.log(obj, ' group change')
                        observer.next({
                            type: circleAction.GET_GROUPS,
                            payload: { key: snapshot.key, obj }
                        })
                    })
                    firebase.database().ref('groups').on("child_removed", (snapshot) => {
                        console.log('child_removed groups')
                        let obj = snapshot.val()
                        observer.next({
                            type: circleAction.CHILD_DEL_GROUPS,
                            payload: { key: snapshot.key, obj }
                        })
                    })
                }).takeUntil(action$.ofType(circleAction.GET_GROUPS_CANCELLED));
            })
    static Groups_cancel = (action$) =>
        action$.ofType(circleAction.GET_GROUPS_CANCELLED)
            .switchMap(({ payload }) => {
                firebase.database().ref(`groups`).off();
                return Observable.of({ type: null })
                //we dont want to do any work on GET_TODO_CANCELLED so we are dispatching NULL action
            })

    static users = (action$) =>
        action$.ofType(circleAction.USERS)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {
                    firebase.database().ref(`users`).on("child_added", (snapshot) => {
                        let obj = snapshot.val()
                        observer.next({
                            type: circleAction.GET_USERS,
                            payload: { key: snapshot.key, obj }
                        })
                    })
                    firebase.database().ref('users').on("child_changed", (snapshot) => {
                        let obj = snapshot.val()
                        console.log(obj, ' users change')
                        observer.next({
                            type: circleAction.GET_USERS,
                            payload: { key: snapshot.key, obj }
                        })
                    })
                    firebase.database().ref('users').on("child_removed", (snapshot) => {
                        console.log('child_removed users')
                        let obj = snapshot.val()
                        observer.next({
                            type: circleAction.CHILD_DEL_USERS,
                            payload: { key: snapshot.key, obj }
                        })
                    })
                }).takeUntil(action$.ofType(circleAction.GET_USERS_CANCELLED));
            })
    static users_cancel = (action$) =>
        action$.ofType(circleAction.GET_USERS_CANCELLED)
            .switchMap(({ payload }) => {
                firebase.database().ref('users').off();
                return Observable.of({ type: null })
                //we dont want to do any work on GET_TODO_CANCELLED so we are dispatching NULL action
            })

}

export default CircleEpic;