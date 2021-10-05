import React from "react";
import styles from "./Users.module.css"
import userPhoto from "./../../assets/images/default_avatar.png"
import {toggleFollowingProgress, UserItemType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
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
                                        <button disabled={props.followingInProgress.some((id: string) => id === user.id)} type="button" onClick={() => {
                                            props.toggleFollowingProgress(true, user.id);
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "968a1a28-eb55-43a7-89bc-ff44bc6685f0"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id);
                                                });
                                            
                                            
                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some((id: string) => id === user.id)} type="button" onClick={() => {
                                            props.toggleFollowingProgress(true, user.id);
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "968a1a28-eb55-43a7-89bc-ff44bc6685f0"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id);
                                                });
                                            
                                            
                                        }}>Follow</button>
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