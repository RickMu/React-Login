export const HttpMetaDataReducer = ({baseType, wrappedReducerInitialState}) => {

    const STARTED = `${baseType}_STARTED`;
    const SUCCEEDED=`${baseType}_SUCCEEDED`;
    const FAILED=`${baseType}_FAILED`;
    
    wrappedReducerInitialState = wrappedReducerInitialState ? wrappedReducerInitialState : {};

    const initialState = Object.assign(wrappedReducerInitialState, {
        loading: false,
        error: null,
        lastFetch: null,
        lastError: null
    });

    return (state=initialState, action) => {

        if(action.type === STARTED){
            return Object.assign({}, state, {loading: true});
        }
        else if(action.type === SUCCEEDED){
            
            return Object.assign({}, state, {
                lastFetch: Date.now(),
                error: null,
                loading: false
              });
        }
        else if(action.type === FAILED){
            
            return Object.assign({}, state, {
                lastError: Date.now(),
                error: action.payload,
                loading: false
              });
        }
        else {
            return state;
        }
    };
}
    