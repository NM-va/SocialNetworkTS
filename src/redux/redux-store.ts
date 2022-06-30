import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";
import { musicReducer } from "./music-reducer";
import { newsReducer } from "./news-reducer";


let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    music: musicReducer,
    news: newsReducer
});

export type StoreType = ReturnType<typeof reducer>;

// export let store = createStore(reducer, applyMiddleware(thunkMiddleware));

//for extension reduxDevTools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));



//@ts-ignore
window.store = store;
