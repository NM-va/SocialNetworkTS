import React from "react";
import {Friends} from "./Friends";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {InitialStateType} from "../../redux/sidebar-reducer";


type MapStatePropsType = {
    sidebar: InitialStateType
}

export type FriendsTypeProps = MapStatePropsType;

let mapStateToProps = (state: StoreType) => {
    return {
        sidebar: state.sidebar
    }
};

export const FriendsContainer = connect(mapStateToProps, {})(Friends)