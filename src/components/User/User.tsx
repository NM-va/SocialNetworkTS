import React from "react";
import styles from "./Users.module.scss";
import userPhoto from "./../../assets/images/default_avatar.png";
import {UserItemType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UserAvatar} from "../Profile/UserAvatar/UserAvatar";

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
        <div className="col-12 col-sm-6 mb-4">
            <div className={`userItemBox ${styles.userItem}`}>
                <UserAvatar photos={user.photos}  avatarClassName={"userAvatarSmall"} address={`/profile/${user.id}`} sizePhoto={"small"}/>
                <div className={"userInfo"}>
                    <NavLink className={"userName"} to={"/profile/" + user.id}>{user.name}</NavLink>
                    {
                        user.followed ?
                            <button className={"btn btnText btn-sm"}
                                    disabled={followingInProgress.some((id: string) => id === user.id)} type="button"
                                    onClick={() => {unfollow(user.id)}}>Unfollow<i className="bi bi-person-dash ms-2"></i></button>
                            : <button className={"btn btnText btn-sm"}
                                      disabled={followingInProgress.some((id: string) => id === user.id)} type="button"
                                      onClick={() => {follow(user.id)}}>Follow<i className="bi bi-person-plus ms-2"></i></button>
                    }
                </div>
            </div>
        </div>
    )
};