import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {follow, getUsers, InitialStateType, setCurrentPage, unfollow} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>,
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    // setUsers: (users:UserItemType[]) => void
    setCurrentPage: (pageNumber: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType;


class UsersAPIComponent extends React.Component<UsersPagePropsType, StoreType> {
    
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
    }
    
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize);
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
                   followingInProgress={this.props.followingInProgress}
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
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
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


export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, getUsers
    }),
)(UsersAPIComponent);