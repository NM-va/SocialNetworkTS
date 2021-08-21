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
    users: [
        {
            id: "1",
            followed: false,
            fullName: "Dmitry K.",
            status: "I am a boss",
            location: {
                country: "Belarus",
                city: "Minsk",
            },
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qbWHSWAYms8owf4do5qdmppgfZWsZAmnQ&usqp=CAU"
        },
        {
            id: "2",
            followed: false,
            fullName: "Svetlana D.",
            status: "I am so pretty",
            location: {
                country: "Belarus",
                city: "Minsk",
            },
            avatar: "https://lh3.googleusercontent.com/proxy/b4L8ZCPxTRf54szpyY5BYBdquYJ_2uUi6WcpZpG6ecxzhe2uod7JiZCUvcUTG_yxygse0VzFy6j0g46uJa82bMmpScWwQjh5G_Qg-65QlOpxbOGQLPPbhVY"
        },
        {
            id: "3",
            followed: false,
            fullName: "Sergei S.",
            status: "I like football!!!",
            location: {
                country: "Ukrane",
                city: "Kiev",
            },
            avatar: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
        },
        {
            id: "4",
            followed: false,
            fullName: "Andrew T.",
            status: "I am free to help you to create good Video Production",
            location: {
                country: "United States",
                city: "Philadelphia",
            },
            avatar: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
        }
    ] as Array<UserItemType>
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
                users: [...state.users, action.users]
            }
        default:
            return state;
    }

}

export const followAC = (userId: string) =>({type: "FOLLOW", userId} as const)
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: UserItemType) => ({type: "SET_USERS", users} as const)