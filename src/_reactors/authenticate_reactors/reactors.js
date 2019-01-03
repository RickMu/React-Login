import { AuthSelectors, UserInfoSelectors } from '../../_selectors';
import { getUserInfo } from '../../_actions/auth/auth.action';


export const userInfoReactor = ({appState, authService}) => {
    console.log(appState)
    if(AuthSelectors.selectIsAuthenticated(appState) &&
        !(UserInfoSelectors.selectLastError(appState) ||
        UserInfoSelectors.selectLastFetch(appState) ||
        UserInfoSelectors.selectLoading(appState))){

        return getUserInfo(authService);
    }
}