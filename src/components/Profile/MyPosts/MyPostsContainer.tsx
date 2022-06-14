import React from "react";
import {addPost, PostType, ProfileType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PhotosType} from "../UserAvatar/UserAvatar";

type MapStatePropsType = {
    posts: Array<PostType>
    login:string | null
    photos: PhotosType | undefined
}

type MapDispatchPropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        login: state.auth.login,
        photos: state.profilePage.profile?.photos
    }
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (text: string) => {
            dispatch(addPost(text));
        }
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);