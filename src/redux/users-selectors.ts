import {StoreType} from "./redux-store";
import {InitialStateType, UserItemType} from "./users-reducer";

export const getUsersSelector = (state: StoreType):UserItemType[] => {
    return state.users.users;
};

export const getPageSizeSelector = (state: StoreType):number => {
    return state.users.pageSize;
};

export const getTotalUsersCountSelector = (state: StoreType):number => {
    return state.users.totalUsersCount;
};

export const getCurrentPageSelector = (state: StoreType):number => {
    return state.users.currentPage;
};

export const getIsFetchingSelector = (state: StoreType):boolean => {
    return state.users.isFetching;
};

export const getFollowingInProgressSelector = (state: StoreType):string[] => {
    return state.users.followingInProgress;
};
