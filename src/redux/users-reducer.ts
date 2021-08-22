import {ActionTypes} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type LocationType = {
    country: string
    city: string
}

export type UserItemType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
    avatar: string
}

let initialState = {
    users: [] as Array<UserItemType>
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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

export const followAC = (userId: string) =>({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserItemType>) => ({type: SET_USERS, users} as const)