import { selectHttpLoading, selectHttpLastError, selectHttpLastFetch } from '../http_metadata_selectors/selectors';


const selectUserInfo = appState => appState.userInfo;
const selectLastFetch = appState => selectHttpLastFetch(selectUserInfo(appState));
const selectLastError = appState => selectHttpLastError(selectUserInfo(appState));
const selectLoading = appState => selectHttpLoading(selectUserInfo(appState));

export const UserInfoSelectors = {
    selectUserInfo,
    selectLastError,
    selectLastFetch,
    selectLoading
}
