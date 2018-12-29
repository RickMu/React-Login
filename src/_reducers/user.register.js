import {Auth, REGISTER_BASE} from '../_constants';
import { HttpMetaDataReducer } from './common/hoc_reducers';

const initialState = {
    user: null
}

const generatedReducer = HttpMetaDataReducer({
    baseType: REGISTER_BASE,
    wrappedReducerInitialState: initialState,
});

const RegisterReducer = (state,action) => {

    state = generatedReducer(state,action);
    if(action.type === Auth.REGISTER_STARTED){
        return Object.assign({},state, {
            user: action.payload
        });

    }else {
        return state;
    }
}

export {RegisterReducer};