import { selectHttpLoading, selectHttpLastError, selectHttpLastFetch, selectHttpError } from '../http_metadata_selectors/selectors';

const selectRegisterState = appState => appState.register;
const selectLoading = appState => selectHttpLoading(selectRegisterState(appState));
const selectLastFetch = appState => selectHttpLastFetch(selectRegisterState(appState));
const selectLastError = appState => selectHttpLastError(selectRegisterState(appState));

const selectError = appState => selectHttpError(selectRegisterState(appState));

export const Register = {
    selectRegisterState,
    selectLoading,
    selectLastFetch,
    selectLastError,
    selectError
}