import {combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, updateNewPostAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageActionType = ReturnType<typeof updateMessageAC>
export type FollowActionType = ReturnType <typeof followAC>
export type UnFollowActionType = ReturnType <typeof unfollowAC>
export type SetUsersType = ReturnType <typeof setUsersAC>
export type SetCurrentPageType = ReturnType <typeof setCurrentPageAC>
export type SetTotalUsersCount = ReturnType <typeof setTotalUsersCountAC>

export type ActionTypes =
    AddPostActionType
    | UpdateNewPostActionType
    | AddMessageActionType
    | UpdateMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCount



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
