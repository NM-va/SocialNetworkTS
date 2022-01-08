import React from "react";
import styles from "./Friends.module.css";
import {FriendsItem} from "./FriendsItem/FriendItem";
import {FriendsTypeProps} from "./FriendsContainer";

export const Friends = (props: FriendsTypeProps) => {
    let friendsList = props.sidebar.friends.map(friend => {
        return (
            <FriendsItem key={friend.id} name={friend.name} id={friend.id} avatar={friend.avatar} />
        )
    });
    
    return (
        <div className={styles.sectionFriends}>
            <h3>Friends</h3>
            <div className={styles.listFriends}>
                {friendsList}
            </div>
        </div>
    )
};