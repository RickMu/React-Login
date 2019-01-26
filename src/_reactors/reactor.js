import { userInfoReactor} from './authenticate_reactors/reactors';
import { userProfileReactor} from './userInfo_reactors/reactors';

const reactors = [userInfoReactor, userProfileReactor];

export function configureReactors (services) {
    const {store} = services;
    
    store.subscribe(() => {
        
        const state = store.getState();

        let nextReaction;
        reactors.some(reactor => {
            const result = reactor({appState: state, ...services});

            if(result){
                nextReaction = result;
                return true;
            }
            return false;
        })

        if(nextReaction){
            store.dispatch(nextReaction);
        }
    })
}