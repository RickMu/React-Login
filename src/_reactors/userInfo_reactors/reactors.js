import { UserProfileSelectors, UserInfoSelectors } from '../../_selectors';
import { getUserProfile } from '../../_actions/auth/auth.action';


export const userProfileReactor = ({appState, authService}) => {
    if(UserInfoSelectors.selectLastFetch(appState) &&
        !(UserProfileSelectors.selectLastError(appState) ||
        UserProfileSelectors.selectLastFetch(appState) ||
        UserProfileSelectors.selectLoading(appState))){

        return getUserProfile(authService);
    }
}