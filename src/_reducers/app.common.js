import {AppCommon} from '../_constants';


const initialState = {
    lastPage: null,
    currentPage: "/",
    redirect: false,
    nextPage: null
}

export const AppCommonReducer = (state = initialState, action) =>{

    if(action.type === AppCommon.APP_COMMON_REDIRECT_REQUESTED){
        Object.assign({}, state, {
            redirect: true,
            nextPage: action.payload
        });
    }
    else if(action.type === AppCommon.APP_COMMON_REDIRECTED){
        Object.assign({}, state, {
            lastPage: state.currentPage,
            currentPage: state.nextPage,
            nextPage: null,
            redirect: false
        })
    }
    else{
        return state
    }
}