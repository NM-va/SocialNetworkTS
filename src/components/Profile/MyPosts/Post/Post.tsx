import React from "react";
import styles from "./Post.module.css";

type PostType = {
    message: string
    like: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.avatarItem}>
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/avatar.png" alt=""/>
            </div>
            {props.message}
            <div>
                <div>{props.like}</div>
            </div>
        </div>
    )
}