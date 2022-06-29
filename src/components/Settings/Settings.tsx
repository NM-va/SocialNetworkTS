import React from "react";
import styles from "./Settings.module.scss";


export const Settings = () => {
    return (
        <div className="card cardItem">
            <div className={styles.greeting}>
                Thank's for coming!
                <i className="bi bi-emoji-smile"></i>
            </div>
        </div>
    )
}