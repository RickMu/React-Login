
const selectAppCommonState = appState => appState.common;
const selectLastPage = appState => selectAppCommonState(appState).lastPage;
const selectNeedRedirect = appState => selectAppCommonState(appState).redirect;
const selectNextPage = appState => selectAppCommonState(appState).nextPage;
const selectCurrentPage = appState => selectAppCommonState(appState).currentPage;

export const AppCommonSelectors = {
    selectAppCommonState,
    selectLastPage,
    selectNeedRedirect,
    selectNextPage,
    selectCurrentPage,
}