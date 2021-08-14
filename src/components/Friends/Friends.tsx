import React from "react";
import styles from "./Friends.module.css";
import {SidebarType} from "../../redux/store";
import {FriendsItem} from "./FriendsItem/FriendItem";

export const Friends = (props: SidebarType) => {
    let friendsList = props.friends.map(friend => {
        return (
            <FriendsItem key={friend.id} name={friend.name} id={friend.id} avatar={friend.avatar} />
        )
    })
    
    return (
        <div className={styles.sectionFriends}>
            <h3>Friends</h3>
            <div className={styles.listFriends}>
                {friendsList}
            </div>
        </div>
    )
}