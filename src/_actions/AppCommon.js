import {AppCommon} from '../_constants/app'



const init = ({appName, pages}) => {
    return {
        type: AppCommon.APP_LOADED,
        payload: {
            appName,
            pages
        }
    }
}

const pageChange = (pageName) => {
    return {
        type: AppCommon.APP_PAGE_CHANGED,
        payload: pageName
    }
}

const AppActions = {
    init,
    pageChange
}
export default AppActions;