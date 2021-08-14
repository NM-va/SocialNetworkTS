import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostType} from "../../redux/store";

type PropsType = {
  postMessage: string
  // addPost: (postMessage: string) => void
  // updateNewPostText: (newPostText: string) => void
  posts: Array<PostType>
  dispatch: (action: ActionTypes) => void
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     postMessage={props.postMessage}
                     dispatch={props.dispatch}
                     // addPostCallback={props.addPost}
                     // updatePostTextCallback={props.updateNewPostText}
            />
        </div>
    )
}