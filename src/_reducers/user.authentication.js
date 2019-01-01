
import { Auth, AUTHENTICATION_BASE } from '../_constants';
import { HttpMetaDataReducer } from './common/hoc_reducers';
const initialState = {
    isAuthenticated: false
}

const generatedReducer = HttpMetaDataReducer({
    baseType: "AUTHENTICATION",
    wrappedReducerInitialState: initialState
});

const AuthenticationReducer = (state = initialState, action) => {

    state = generatedReducer(state,action);

    if(action.type === Auth.AUTHENTICATION_SUCCEEDED){
        return Object.assign({}, state, {isAuthenticated: true})
    }
    else if(action.type === Auth.AUTHENTICATION_SIGNEDOUT){
        return Object.assign({}, state, {isAuthenticated: false})
    }
    else {
        return state;
    }
}

export { AuthenticationReducer };