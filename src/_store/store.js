import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../_reducers';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));


window.store = store;
