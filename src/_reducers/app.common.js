import {AppCommon} from '../_constants';


const initialState = {
    appName:null,
    appLoaded: false,
    pageName: null,
    pages:null
}

export const AppCommonReducer = (state = initialState, action) =>{

    if(action.type === AppCommon.APP_LOADED){
        console.log(action.payload)
        return Object.assign({}, state, {
            appLoaded:true,
            appName: action.payload.appName,
            pages: action.payload.pages
        });
    }
    else if(action.type === AppCommon.APP_PAGE_CHANGED){
        return Object.assign({}, state, {
            pageName: action.payload
        })
    }
    else{
        return state
    }
}