import React from "react";
import styles from "./Friends.module.scss";
import {FriendsItem} from "./FriendsItem/FriendItem";
import {FriendsTypeProps} from "./FriendsContainer";

export const Friends = (props: FriendsTypeProps) => {
    let friendsList = props.sidebar.friends.map(friend => {
        return (
            <FriendsItem key={friend.id} name={friend.name} id={friend.id} avatar={friend.avatar} address={friend.address} />
        )
    });
    
    return (
        <div className={`card cardItem`}>
            <h3 className="mb-3">Friends</h3>
            <div className={styles.listFriends}>
                {friendsList}
            </div>
        </div>
    )
};