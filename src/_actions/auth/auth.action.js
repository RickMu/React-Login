import { Auth, Profile } from "../../_constants";
import { authService } from "../../_service/auth0";

export function register(user, authService){
    return (dispatch) => {

        dispatch({
            type: Auth.REGISTER_STARTED,
            payload: user.email
        });

        authService.signup(user.email,user.password, {
            firstname: user.firstname,
            lastname: user.lastname
        }).then(
            ()=> {
                console.log("Sign up Success");
                dispatch({
                    type: Auth.REGISTER_SUCCEEDED
                });
            }
        )    
        .catch(
            (err)=> {
                console.log("Sign up failed");
                dispatch({
                    type: Auth.REGISTER_FAILED,
                    payload: err
                });
            });
    }
}

export function login(user, authService){

    return (dispatch) => {

        dispatch({
            type: Auth.LOGIN_STARTED,
            payload: {
                email: user.email,
            }
        });

        authService.login(user.email,user.password).then(() => {
            
            console.log("Success Login");

            dispatch({
                type: Auth.LOGIN_SUCCEEDED
            });
        }).catch(()=>{
            console.log("Login Failed");
            dispatch({
                type: Auth.LOGIN_FAILED,
                payload: "login failed"
            });
        })
    }
}

export function authenticate(authService) {

    return (dispatch) => {
        dispatch({
            type: Auth.AUTHENTICATION_STARTED
        });
    
        authService.handleAuthentication().then(()=>{
            console.log("Handle Success")
            dispatch({
                type: Auth.AUTHENTICATION_SUCCEEDED
            });

            dispatch({
                type: Profile.PROFILE_LOGGEDIN,
                payload: {}
            })
    
        }).catch((err) => {
            console.log(err);
            dispatch({
                type: Auth.AUTHENTICATION_FAILED
            });
        });
    }
}

export function logout(authService) {

    return (dispatch) => {

        console.log(dispatch);
        console.log(authService);
        authService.logout().then(() =>{
            dispatch({
                type:Auth.AUTHENTICATION_SIGNEDOUT
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: Auth.AUTHENTICATION_FAILED
            });
        })
    }
}