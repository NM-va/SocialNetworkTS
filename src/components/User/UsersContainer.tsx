import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserItemType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users:UserItemType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType;


class UsersAPIComponent extends React.Component<UsersPagePropsType, StoreType> {
    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
      page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
      page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };
    
    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader /> : null}
            <Users users={this.props.usersPage.users}
                   pageSize={this.props.usersPage.pageSize}
                   totalUsersCount={this.props.usersPage.totalUsersCount}
                   currentPage={this.props.usersPage.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.usersPage.isFetching}
            />
        </>
    }
}


let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
};

// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: string) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users:UserItemType[]) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// };




export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow,setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersAPIComponent);