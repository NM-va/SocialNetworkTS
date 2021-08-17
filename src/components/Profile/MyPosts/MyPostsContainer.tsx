import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";


type TypesProps = {
    store: StoreType
}

export const MyPostsContainer: React.FC<TypesProps> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state = store.getState();

                    let addPost = () => {
                        props.store.dispatch(addPostActionCreator(state.profilePage.postMessage));
                    };

                    let onPostChange = (text: string) => {
                        props.store.dispatch(updateNewPostActionCreator(text));
                    };

                    return (
                        <MyPosts updatePostTextCallback={onPostChange} addPostCallback={addPost}
                                 posts={state.profilePage.posts} postMessage={state.profilePage.postMessage}/>
                    )
                }
            }

        </StoreContext.Consumer>
    )
}