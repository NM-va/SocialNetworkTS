import {combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, updateNewPostAC, setUserProfile} from "./profile-reducer";
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
import {authReducer, setAuthUserData} from "./auth-reducer";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageActionType = ReturnType<typeof updateMessageAC>
export type FollowActionType = ReturnType<typeof follow>
export type UnFollowActionType = ReturnType<typeof unfollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetUserDataType = ReturnType<typeof setAuthUserData>

export type ActionTypes =
    AddPostActionType
    | UpdateNewPostActionType
    | AddMessageActionType
    | UpdateMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | SetUserProfileType
    | SetUserDataType


let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
});

export type StoreType = ReturnType<typeof reducer>;


export let store = createStore(reducer);

//@ts-ignore
window.store = store;
