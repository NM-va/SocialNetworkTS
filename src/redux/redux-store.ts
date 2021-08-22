import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer
});

export type StoreType = ReturnType<typeof reducer>;


export let store = createStore(reducer);

declare global {
  interface Window { store: any; }
}

window.store = store;
