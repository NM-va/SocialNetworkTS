import React from "react";
import styles from "./Post.module.scss";
import {PhotosType, UserAvatar} from "../../UserAvatar/UserAvatar";
import {ProfileType} from "../../../../redux/profile-reducer";

type PostType = {
    message: string
    like: number
    photos: PhotosType | undefined
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={styles.item}>
            <UserAvatar photos={props.photos} avatarClassName={"userAvatarSmall"} address={"/"} sizePhoto={"small"}/>
            <div className={styles.message}>{props.message}</div>
            <div className={styles.postAdditionalInfo}>
                <div><i className="bi bi-heart-pulse me-2"></i>{props.like}</div>
            </div>
        </div>
    )
};