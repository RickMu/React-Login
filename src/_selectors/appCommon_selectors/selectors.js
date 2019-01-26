
const selectAppCommonState = appState => appState.common;
const selectAppName = appState => selectAppCommonState(appState).appName;
const selectAppLoaded = appState => selectAppCommonState(appState).appLoaded;
const selectPageName = appState => selectAppCommonState(appState).pageName;
const selectAllPages = appState => selectAppCommonState(appState).pages;

export const AppCommonSelectors = {
    selectAppCommonState,
    selectPageName,
    selectAppName,
    selectAppLoaded,
    selectAllPages
}