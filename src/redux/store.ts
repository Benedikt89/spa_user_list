import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app/reducer";
import usersReducer from "./users/reducer";
import {I_appActions} from "./app/actions";
import {I_usersActions} from "./users/actions";


const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionsType = I_appActions | I_usersActions;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type GetStateType = () => AppStateType

export default store;