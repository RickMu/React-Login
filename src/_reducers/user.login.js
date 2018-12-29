import {Auth, LOGIN_BASE} from '../_constants';
import { HttpMetaDataReducer } from './common/hoc_reducers';

const loginInitialState = {
    user: null
};

const generatedReducer = HttpMetaDataReducer({
    baseType: LOGIN_BASE,
    wrappedReducerInitialState: loginInitialState
});

const LoginReducer = (state, action) => {

    state = generatedReducer(state,action);
    if(action.type === Auth.LOGIN_SUCCEEDED){
        return Object.assign({}, state, {
                user: action.payload
            });
    }
    else{
        return state;
    }
}

export { LoginReducer };