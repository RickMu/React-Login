import { selectHttpLoading, selectHttpLastError, selectHttpLastFetch } from '../http_metadata_selectors/selectors';

const selectUserProfile = appState => appState.profile;
const selectLastFetch = appState => selectHttpLastFetch(selectUserProfile(appState));
const selectLastError = appState => selectHttpLastError(selectUserProfile(appState));
const selectLoading = appState => selectHttpLoading(selectUserProfile(appState));

export const UserProfileSelectors = {
    selectUserProfile,
    selectLastError,
    selectLastFetch,
    selectLoading
}
