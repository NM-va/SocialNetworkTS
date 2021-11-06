import {updateMessageAC, UpdateNewPostActionType} from "./dialogs-reducer";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type contactsType={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    userId: number
    photos: {small: string, large: string}
}

export type InitialStateType = {
    messageNewPost: string
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

let initialState: InitialStateType = {
    messageNewPost: "it",
    posts: [
        {id: 1, message: "How, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 12},
        {id: 4, message: "Dada", likesCount: 12}
    ],
    profile: null,
    status: '',
};


export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateMessageActionType = ReturnType<typeof updateMessageAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>


type ActionTypes = AddPostActionType
    | UpdateNewPostActionType
    | SetUserProfileType
    | SetStatusType



export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage != null ? action.postMessage : "---",
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.messageNewPost = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.messageNewPost = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export const addPost = (text: string) => ({type: ADD_POST, postMessage: text} as const );
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const );
export const updateNewPost = (value: string) => ({type: UPDATE_NEW_POST_TEXT, newText: value} as const );
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const );

export const getUserProfile = (userId: string) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const getUserStatus = (userId: string) => (dispatch: any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
        dispatch(setStatus(status));
    });
};