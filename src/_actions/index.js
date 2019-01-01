import { login, register, authenticate, logout } from './auth/auth.action';
export const userActions = {
    login: login,
    register: register,
    authenticate: authenticate,
    logout: logout
}