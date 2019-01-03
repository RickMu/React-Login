import { selectHttpLoading, selectHttpLastError, selectHttpLastFetch } from '../http_metadata_selectors/selectors';

const selectAuthenticate = appState => appState.authenticate;
const selectIsAuthenticated = appState => selectAuthenticate(appState).isAuthenticated;
const selectIsLoading = appState => selectHttpLoading(selectAuthenticate(appState));
const selectLastFetch = appState => selectHttpLastFetch(selectAuthenticate(appState));
const selectlastError = appState => selectHttpLastError(selectAuthenticate(appState));

export const AuthSelectors = {
    selectAuthenticate,
    selectIsAuthenticated,
    selectIsLoading,
    selectLastFetch,
    selectlastError
}
