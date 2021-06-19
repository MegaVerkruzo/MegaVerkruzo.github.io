import {createStore, combineReducers} from 'redux';
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import findFriendsReducer from "./findFriendsReducer";

let reducers = combineReducers( {
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    NavBarPage: sidebarReducer,
    findFriendsPage: findFriendsReducer
})

let store = createStore(reducers);

window.store = store;

export default store;