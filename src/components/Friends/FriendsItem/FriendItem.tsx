import React from "react";
import styles from "../Friends.module.css";
import {FriendItemType} from "../../../redux/state";



export const FriendsItem = (props: FriendItemType) => {
    
    return (
        <div className={styles.listFriendsItem}>
            <div>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={styles.name}>
                {props.name}
            </div>
        </div>
    )
}