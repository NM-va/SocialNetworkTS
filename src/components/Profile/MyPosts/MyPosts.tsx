import React from "react";
import styles from "./MyPosts.module.scss";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {UserAvatar} from "../UserAvatar/UserAvatar";
import {ProfileType} from "../../../redux/profile-reducer";

type PropsType = {
    addPost: (text: string) => void
    login:string | null
    profile: ProfileType | null
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
            <div className="d-flex">
                <UserAvatar profile={props.profile} avatarClassName={"userAvatarSmall"}/>
                <div className="ps-3 w-100">
                    <textarea className="form-control"
                        {...formik.getFieldProps("textPost")}
                        // value={props.postMessage}
                        // onChange={onPostChangeHandler}
                        // name="textPost"
                        // id="textPost"
                    >
                    </textarea>
                        { hasError ? <div className={"error-message"}>{formik.errors.textPost}</div> : null}
                </div>
            </div>
            <div className={"d-flex justify-content-end mt-3"}>
                <button className="btn btnOutlineCustom me-2" type="button">Remove</button>
                <button className="btn btnCustom" type="button">Add post</button>
            </div>
        </form>
    )
};

export const MyPosts:React.FC<MyPostsPropsType> = React.memo((props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} profile={props.profile} message={post.message} like={post.likesCount}/>);

    return (
        <div className={`${styles.postsBlock} card cardItem`}>
            <h2>My Posts</h2>
            <MyPostForm addPost={props.addPost} profile={props.profile} login={props.login} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
});