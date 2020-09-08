import AuthEpic from './authEpic'
import CircleEpic from './circleEpic'
import { combineEpics } from 'redux-observable';
export { AuthEpic, CircleEpic }

//combine epic
let rootEpic = combineEpics(
    AuthEpic.createUser,
    AuthEpic.loginUser,
    AuthEpic.logout,
    AuthEpic.profile,
    AuthEpic.editProfile,

    CircleEpic.createGroup,
    CircleEpic.AddParticipant,
    CircleEpic.leftParticipant,
    CircleEpic.acceptRequest,
    CircleEpic.cancelRequest,

    CircleEpic.Groups,
    CircleEpic.Groups_cancel,

    CircleEpic.users,
    CircleEpic.users_cancel,
);

export default rootEpic 