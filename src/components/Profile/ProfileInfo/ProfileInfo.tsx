import React from "react";
import styles from './ProfileInfo.module.css';



export const ProfileInfo = () => {
    return (
        <div className={styles.content}>
            <div><img src="https://wallpaperaccess.com/full/1682070.jpg" alt=""/></div>
            <div className={styles.descriptionBlock}>
                <div className={styles.avatar}>ava</div>
                <div className={styles.description}>Description</div>
            </div>
        </div>
    )
}