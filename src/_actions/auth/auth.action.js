import { Auth, Profile } from "../../_constants";



export function register(user, register){
    return async (dispatch) => {

        dispatch({
            type: Auth.REGISTER_STARTED,
            payload: user.email
        });
        try{
            await register();
            console.log("Sign up Success");
                dispatch({
                    type: Auth.REGISTER_SUCCEEDED
            });
        }
        catch(err){
            dispatch({
                type: Auth.REGISTER_FAILED,
                payload: err
            });
        }
    }
}

export function login(user, login){

    return async (dispatch) => {
        dispatch({
            type: Auth.LOGIN_STARTED,
            payload: {
                email: user.email,
            }
        });
        
        try{
            await login();
            dispatch({
                type: Auth.LOGIN_SUCCEEDED
            });
        }
        catch(err) {
            dispatch({
                type: Auth.LOGIN_FAILED,
                payload: "login failed"
            });
        }
    }
}

export function authenticateSucceed(){
    return ({
        type: Auth.AUTHENTICATION_SUCCEEDED
    });
}

export function getUserInfo(authService){
    return dispatch => {
        dispatch({
            type: Profile.USERINFO_FETCH_STARTED
        })

        authService.getUserInfo()
            .then((userInfo) => {
                console.log(userInfo)
                dispatch({
                    type: Profile.USERINFO_FETCH_SUCCEEDED,
                    payload: userInfo
                })
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: Profile.USERINFO_FETCH_FAILED
                })
            })
    }
}

export function getUserProfile(authService){
    return dispatch => {
        dispatch({
            type: Profile.PROFILE_FETCH_STARTED
        });

        authService.getUserProfile()
            .then((userProfile =>{
               dispatch({
                   type: Profile.PROFILE_FETCH_SUCCEEDED,
                   payload: userProfile
               })
            }))
            .catch((err) => {
                console.log(err)
                
                dispatch({
                    type: Profile.PROFILE_FETCH_FAILED
                });
            })
    }
}

export function logout(logout) {

    return async (dispatch) => {
        await logout();
        dispatch({
            type:Auth.AUTHENTICATION_SIGNEDOUT
        });
    }
}

export function authenticate(validate) {
    
    return async (dispatch) => {

        console.log(dispatch)
        dispatch({
            type: Auth.AUTHENTICATION_STARTED
        });
        
        try{
            await validate();
            dispatch(authenticateSucceed());

        }catch (err){
            console.log(dispatch)
            dispatch({
                type: Auth.AUTHENTICATION_FAILED
            });
        }
    }
}