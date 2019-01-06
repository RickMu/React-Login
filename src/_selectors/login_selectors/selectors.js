export const selectLogin = (appState) => {
    return appState.login;
};

export const selectIsLoading = appState => selectLogin(appState).loading; 

export const selectLoginFailed = (appState) => {
    const loginState = selectLogin(appState);

    if(loginState.error ===null){
        return false;
    }else {
        return true;
    }
};