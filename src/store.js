import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import reducer from './reducers/index';


 284730e237e0166107f72624f51fa5df8a4e0523

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
