import { HttpMetaDataReducer } from './common/hoc_reducers';
import { PROFILE_BASE, Profile } from '../_constants';

const initialState = {
    email: null,
    emailVerified: false,
    nickname: null,
    firstname: null,
    lastname: null,
    createdAt: null,
    lastLogin: null
}

const payloadSelect = payload => ({
    email: payload.email,
    emailVerified: payload.email_verified,
    nickname: payload.nickname,
    firstname: payload.user_metadata.firstname,
    lastname: payload.user_metadata.lastname,
    createdAt:payload.created_at,
    lastLogin: payload.last_login
})

const generatedReducer = HttpMetaDataReducer({
    baseType: PROFILE_BASE,
    wrappedReducerInitialState: initialState
});

export const ProfileReducer = (state, action) => {
    state = generatedReducer(state, action);

    if(action.type === Profile.PROFILE_FETCH_SUCCEEDED){
        return Object.assign({}, state, payloadSelect(action.payload));
    }
    else{
        return state;
    }
}