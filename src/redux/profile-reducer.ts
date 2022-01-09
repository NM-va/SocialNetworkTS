import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ContactsType={
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
    contacts: ContactsType
    userId: number
    photos: PhotosType
}

export type PhotosType = {
    small: string
    large: string
}

export type InitialStateType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

let initialState: InitialStateType = {
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
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>
export type DeletePostActionType = ReturnType<typeof deletePost>
export type SavePhotoAccessActionType = ReturnType<typeof savePhotoAccess>


type ActionTypes = AddPostActionType
    | SetUserProfileType
    | SetStatusType
    | DeletePostActionType
    | SavePhotoAccessActionType



export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)};
        }
        case SAVE_PHOTO_SUCCESS: {
            let profile = state.profile ? {...state.profile, photos: action.photos} : null;
            return {...state, profile};
        }
        default:
            return state;
    }
};


//actions
export const addPost = (text: string) => ({type: ADD_POST, postMessage: text} as const );
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const );
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const );
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const );
export const savePhotoAccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const );


//thunks
export const getUserProfile = (userId: string) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: string) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setStatus(status));
};

export const savePhoto = (photoFile: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(photoFile);
    if (response.data.resultCode === 0)
        dispatch(savePhotoAccess(response.data.data.photos));
};
