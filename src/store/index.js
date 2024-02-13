import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare, logger )));
