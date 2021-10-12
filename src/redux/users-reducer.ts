import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type LocationType = {
    country: string
    city: string
}

export type PhotoType = {
    small: string
    large: string
}

export type UserItemType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: PhotoType
}

let initialState = {
    users: [] as Array<UserItemType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<string>
};

export type FollowActionType = ReturnType<typeof followSuccess>
export type UnFollowActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

type ActionTypes = FollowActionType
    | UnFollowActionType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleFollowingProgressType


export type InitialStateType = typeof initialState;

type ThunkType = ThunkAction<void, StoreType, unknown, ActionTypes>

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            };
        case SET_USERS :
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
    
}

export const followSuccess = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserItemType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}


export const follow = (userId: string): ThunkType => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export const unfollow = (userId: string): ThunkType => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}