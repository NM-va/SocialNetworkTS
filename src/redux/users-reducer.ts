import {setUserProfile} from "./profile-reducer";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
    isFetching: false
};

export type FollowActionType = ReturnType<typeof follow>
export type UnFollowActionType = ReturnType<typeof unfollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>

type ActionTypes = FollowActionType
    | UnFollowActionType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType


export type InitialStateType = typeof initialState;

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
        default:
            return state;
    }

}

export const follow = (userId: string) =>({type: FOLLOW, userId} as const)
export const unfollow = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserItemType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)