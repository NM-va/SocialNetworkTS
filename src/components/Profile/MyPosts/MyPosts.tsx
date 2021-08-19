import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts:React.FC<MyPostsPropsType> = (props) => {
    
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} like={post.likesCount}/>);
    
    let addPostHandler = () => {
      props.addPost(props.postMessage);
    };
    
    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updatePostTextCallback(e.currentTarget.value);
    };
    
    return (
        <div className={styles.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea
                              value={props.postMessage}
                              onChange={onPostChangeHandler}
                              name="textPost"
                              id="textPost"></textarea>
                </div>
                <button onClick={addPostHandler} type="button">Add post</button>
                <button type="button">Remove</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}