import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducers=combineReducers({
    // reducers
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
});

const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null;

const intitalState={
    userLogin:{userInfo:userInfoFromStorage}
};

const middleware =[thunk];

const store = createStore(
    reducers,
    intitalState,
    composeWithDevTools(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );

export default store;
