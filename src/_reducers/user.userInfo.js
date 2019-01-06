import { HttpMetaDataReducer } from './common/hoc_reducers';
import { USERINFO_BASE, Profile } from '../_constants';

const initialState = {
    email: null,
    nickname: null,
}

const payloadSelect = payload=>({
    email: payload.email,
    nickname: payload.nickname,
})

const generatedReducer = HttpMetaDataReducer({
    baseType: USERINFO_BASE,
    wrappedReducerInitialState: initialState
});

export const UserInfoReducer = (state, action) => {
    state = generatedReducer(state, action);

    if(action.type === Profile.USERINFO_FETCH_SUCCEEDED){
        return Object.assign({}, state, payloadSelect(action.payload));
    }
    else{
        return state;
    }
}