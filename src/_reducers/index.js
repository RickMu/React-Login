import { combineReducers } from 'redux';
import { LoginReducer } from './user.login';
import { RegisterReducer } from './user.register';
import { AuthenticationReducer } from './user.authentication';
import { UserInfoReducer } from './user.userInfo';
import { ProfileReducer } from './user.profile';
import { AppCommonReducer } from './app.common';
export const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    authenticate: AuthenticationReducer,
    userInfo: UserInfoReducer,
    profile: ProfileReducer,
    common: AppCommonReducer
});