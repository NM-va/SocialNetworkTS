import React from "react";
import {UserItemType} from "../../redux/users-reducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";
import styles from "./Users.module.scss";

type PropsType = {
    users: Array<UserItemType>
    pageSize: number,
    totalItemsCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    isFetching: boolean
    followingInProgress: Array<string>
}

export const Users = ({
                          users,
                          pageSize,
                          totalItemsCount,
                          currentPage,
                          onPageChanged,
                          follow,
                          unfollow,
                          isFetching,
                          followingInProgress,
                          ...props
                      }: PropsType) => {
    
    return (
        <div className={styles.usersList}>
            <div className="row mb-3">
                {
                    users.map(user => (
                        <User key={user.id}
                              user={user}
                              follow={follow}
                              unfollow={unfollow}
                              followingInProgress={followingInProgress}/>
                    ))
                }
            </div>
            <Pagination totalItemsCount={totalItemsCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        portionSize={10}/>
        </div>
    )
}