import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducers=combineReducers({
    // reducers
    userLogin:userLoginReducer,
    
});

const intitalState={};

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
