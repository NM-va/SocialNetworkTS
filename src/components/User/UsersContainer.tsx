import React from "react";
import {connect} from "react-redux";
import { Users } from "./Users";
import {StoreType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserItemType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users:UserItemType[]) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: StoreType) => {
    return {
        usersPage: state.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UserItemType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)