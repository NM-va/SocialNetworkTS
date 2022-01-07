import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {follow, requestUsers, setCurrentPage, unfollow, UserItemType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/users-selectors";


type MapStatePropsType = {
    users: UserItemType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>,
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType;


class UsersAPIComponent extends React.Component<UsersPagePropsType, StoreType> {
    
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    
    onPageChanged = (pageNumber: number) => {
        const {setCurrentPage, getUsers, pageSize} = this.props;
        setCurrentPage(pageNumber);
        getUsers(pageNumber, pageSize);
    };
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalItemsCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
};

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, getUsers: requestUsers
    }),
)(UsersAPIComponent);