import React from "react";
import {UserItemType} from "../../redux/users-reducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

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
}

export const Users = ({
                          users,
                          pageSize,
                          totalUsersCount,
                          currentPage,
                          onPageChanged,
                          follow,
                          unfollow,
                          isFetching,
                          followingInProgress,
                          ...props
                      }: PropsType) => {
    
    return (
        <div>
            <Pagination totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}/>
            <div>
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
        </div>
    )
}