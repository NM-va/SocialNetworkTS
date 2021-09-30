import {combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, updateNewPostAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    usersReducer
} from "./users-reducer";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageActionType = ReturnType<typeof updateMessageAC>
export type FollowActionType = ReturnType <typeof follow>
export type UnFollowActionType = ReturnType <typeof unfollow>
export type SetUsersType = ReturnType <typeof setUsers>
export type SetCurrentPageType = ReturnType <typeof setCurrentPage>
export type SetTotalUsersCount = ReturnType <typeof setTotalUsersCount>
export type ToggleIsFetching = ReturnType <typeof toggleIsFetching>

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
    | ToggleIsFetching



let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer
});

export type StoreType = ReturnType<typeof reducer>;


export let store = createStore(reducer);

//@ts-ignore
window.store = store;
