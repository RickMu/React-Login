import { Auth } from "../../_constants";

export function register(user){
    return (dispatch) => {

        dispatch({
            type: Auth.REGISTER_STARTED,
            payload: user.email
        });

        if(user.firstname && user.lastname && user.email && user.password){
            dispatch({
                type: Auth.REGISTER_SUCCEEDED
            });
        }
        else {
            dispatch({
                type: Auth.REGISTER_FAILED
            });
        }
    }
}

export function login(user){

    return (dispatch) => {

        dispatch({
            type: Auth.LOGIN_STARTED
        });

        if(user.email && user.password){
            dispatch({
                type: Auth.LOGIN_SUCCEEDED,
                payload: user.email
            });
        }
        else {
            dispatch({
                type: Auth.LOGIN_FAILED
            });
        }
    }
}
