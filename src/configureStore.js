import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {userLoginReducer} from './reducers/userReducer';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

const middleware = [thunk];

const configureStore = createStore(rootReducer, applyMiddleware(...middleware));

export default configureStore;
