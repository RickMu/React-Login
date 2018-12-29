import { combineReducers } from 'redux';
import { LoginReducer } from './user.login';
import { RegisterReducer } from './user.register';

export const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer
});