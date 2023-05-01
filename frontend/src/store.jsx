import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from "./reducers/notesReducers";

const reducers=combineReducers({

    // reducers
    //userLogin here is the state name and userLoginReducer is the reducer
    //userLogin state helps to access the state in the component
    //use of userLogin here is to access the state in the component
    
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    noteList:noteListReducer,
    noteCreate:noteCreateReducer,
    noteUpdate:noteUpdateReducer,
    noteDelete:noteDeleteReducer,
    userUpdate:userUpdateReducer
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
