import React from "react";
import styles from "../Friends.module.scss";
import {FriendItemType} from "../../../redux/sidebar-reducer";
import { NavLink } from "react-router-dom";

export const FriendsItem = (props: FriendItemType) => {
    
    return (
        <div className={`${styles.friendItem} userItemBox`}>
            <NavLink className="userAvatarSmall" to={props.address}>
                <img className="userAvatarImg" src={props.avatar} alt=""/>
            </NavLink>
            <div className="userInfo">
                <NavLink className="userName" to={props.address}>{props.name}</NavLink>
            </div>
        </div>
    )
}