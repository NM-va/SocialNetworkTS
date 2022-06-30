import React from "react";
import preloaderImg from "../../../assets/images/preloader.gif";
import styles from "./Preloader.module.scss";

export const Preloader = () => {
    return  (
        <div className={styles.preloader}>
            <img src={preloaderImg} />
        </div>
    )
};