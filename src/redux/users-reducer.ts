import {ActionTypes} from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
    currentPage: 4
};

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
        default:
            return state;
    }

}

export const followAC = (userId: string) =>({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserItemType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)