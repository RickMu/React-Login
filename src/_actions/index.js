import { login, register, authenticate, logout, authenticateSucceed } from './auth/auth.action';
export const userActions = {
    login: login,
    register: register,
    authenticate,
    logout: logout,
    authenticateSucceed
}