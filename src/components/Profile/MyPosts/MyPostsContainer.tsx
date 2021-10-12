import React from "react";
import {addPost, PostType, updateNewPost} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    postMessage: string
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    updatePostTextCallback: (text: string) => void
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        postMessage: state.profilePage.messageNewPost,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updatePostTextCallback: (text: string) => {
            dispatch(updateNewPost(text));
        },
        addPost: (text: string) => {
            dispatch(addPost(text));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);