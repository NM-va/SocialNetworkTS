import React from "react";
import styles from "./Post.module.scss";
import {UserAvatar} from "../../UserAvatar/UserAvatar";
import {ProfileType} from "../../../../redux/profile-reducer";

type PostType = {
    message: string
    like: number
    profile: ProfileType | null
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={styles.item}>
            <UserAvatar profile={props.profile} avatarClassName={"userAvatarSmall"}/>
            <div className={styles.message}>{props.message}</div>
            <div className={styles.postAdditionalInfo}>
                <div><i className="bi bi-heart-pulse me-2"></i>{props.like}</div>
            </div>
        </div>
    )
};