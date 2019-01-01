import { combineReducers } from 'redux';
import { LoginReducer } from './user.login';
import { RegisterReducer } from './user.register';
import { AuthenticationReducer } from './user.authentication';

export const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    authenticate: AuthenticationReducer
});