import React from "react";
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import * as Yup from 'yup';

type PropsType = {
    addPost: (text: string) => void
}

const SignupSchema = Yup.object().shape({
    textPost: Yup.string()
        .max(30, 'Too Long!')
        .required('Required'),
});

const MyPostForm = (props: PropsType) => {
    const formik = useFormik({
        initialValues: {
            textPost: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            props.addPost(values.textPost)
        }
    });

    const hasError = formik.touched.textPost && formik.errors.textPost;

    return (
        <form onSubmit={(e) => {
            formik.handleSubmit(e);
            // formik.resetForm();
        }}>
    
            <div>
                <textarea
                    {...formik.getFieldProps("textPost")}
                    // value={props.postMessage}
                    // onChange={onPostChangeHandler}
                    // name="textPost"
                    // id="textPost"
                >
                </textarea>
                { hasError ? <div className={"error-message"}>{formik.errors.textPost}</div> : null}
            </div>
            <button type="submit">Add post</button>
            <button type="button">Remove</button>
        </form>
    )
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {
    
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} like={post.likesCount}/>);
    
    return (
        <div className={styles.postsBlock}>
            <h2>My Posts</h2>
            <MyPostForm addPost={props.addPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}