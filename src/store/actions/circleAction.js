
class CircleAction {
    // -----  for epic  ----------
    static GROUP = "GROUP"
    static USERS = "USERS"

    static CREATE_GROUP = "CREATE_GROUP"
    static ADD_PARTICIPANT = "ADD_PARTICIPANT"
    static LEFT_PARTICIPANT = "LEFT_PARTICIPANT"
    static ACCEPT_REQ = "ACCEPT_REQ"
    static CANCEL_REQ = "CANCEL_REQ"

    static GET_GROUPS_CANCELLED = "GET_GROUPS_CANCELLED"
    static GET_USERS_CANCELLED = "GET_USERS_CANCELLED"


    // -----  for reducer  ----------
    static GET_GROUPS = "GET_GROUPS"
    static GET_USERS = "GET_USERS"
    static CHILD_DEL_USERS = "CHILD_DEL_USERS"
    static CHILD_DEL_GROUPS = "CHILD_DEL_GROUPS"




    // -----  for epic  ----------
    static createGroup(obj) { return { type: CircleAction.CREATE_GROUP, payload: obj } }
    static AddParticipant(obj) { return { type: CircleAction.ADD_PARTICIPANT, payload: obj } }
    static acceptRequest(obj) { return { type: CircleAction.ACCEPT_REQ, payload: obj } }
    static cancelRequest(obj) { return { type: CircleAction.CANCEL_REQ, payload: obj } }
    static leftParticipant(obj) { return { type: CircleAction.LEFT_PARTICIPANT, payload: obj } }

    static Groups(obj) { return { type: CircleAction.GROUP, payload: obj } }
    static Groups_cancel(data) { return { type: CircleAction.GET_GROUPS_CANCELLED, } }

    static users() { return { type: CircleAction.USERS } }
    static users_cancel(data) { return { type: CircleAction.GET_USERS_CANCELLED, } }


    // -----  for reducer  ----------xxx
}

export default CircleAction;