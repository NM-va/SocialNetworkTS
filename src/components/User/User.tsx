import React from "react";
import styles from "./Users.module.css";
import userPhoto from "./../../assets/images/default_avatar.png";
import {UserItemType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserItemType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: Array<string>
}

export const User = ({
                          user,
                          follow,
                          unfollow,
                          followingInProgress,
                          ...props
                      }: PropsType) => {
    
    return (
        <>
            <div>
                <div className={styles.userAvatar}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed ?
                            <button disabled={followingInProgress.some((id: string) => id === user.id)} type="button"
                                    onClick={() => {unfollow(user.id)}}>
                                Unfollow</button>
                            : <button disabled={followingInProgress.some((id: string) => id === user.id)} type="button"
                                      onClick={() => {follow(user.id)}}>
                                Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>
                    {user.name}
                    <span>{user.status}</span>
                </div>
                <div>
                    {"user.location.country"}
                    <span>{"user.location.city"}</span>
                </div>
            </div>
        </>
    )
};