import React from "react";
import styles from "./Users.module.css"
import userPhoto from "./../../assets/images/default_avatar.png"
import {follow, toggleFollowingProgress, UserItemType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type PropsType = {
    users: Array<UserItemType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    isFetching: boolean
    followingInProgress: Array<string>
    // toggleFollowingProgress: (isFetching: boolean, userId: string) => void
}

export const Users = (props: PropsType) => {
    
    
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    
    
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    
    return (
        <div>
            <ul className={styles.pagination}>
                {
                    pages.map(page => {
                        return (
                            <li className={`${props.currentPage === page ? styles.selectedPage : ""} ${styles.pageItem}`}
                                onClick={(e) => {
                                    props.onPageChanged(page)
                                }}
                            >{page}</li>
                        )
                    })
                }
            </ul>
            
            {
                props.users.map(user => (
                    <div key={user.id}>
                        <div>
                            <div className={styles.userAvatar}>
                                <NavLink to={"/profile/" + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    user.followed ?
                                        <button disabled={props.followingInProgress.some((id: string) => id === user.id)} type="button"
                                                onClick={() => {props.unfollow(user.id)}}>
                                            Unfollow</button>
                                        : <button disabled={props.followingInProgress.some((id: string) => id === user.id)} type="button"
                                                  onClick={() => {props.follow(user.id)}}>
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
                    </div>
                ))
            }
        </div>
    )
}