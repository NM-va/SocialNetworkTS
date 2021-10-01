import React from "react";
import styles from "./Users.module.css"
import userPhoto from "./../../assets/images/default_avatar.png"
import {UserItemType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    users: Array<UserItemType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    isFetching: boolean
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
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    user.followed ? <button type="button" onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button type="button" onClick={() => {
                                            props.follow(user.id)
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