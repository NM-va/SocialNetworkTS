import React from "react";
import {Friends} from "./Friends";
import {StoreType} from "../../../redux/redux-store";


type TypesProps = {
    store: StoreType
}


export const FriendsContainer = (props: TypesProps) => {
    let state = props.store.getState();

    return (
        <Friends friends={state.sidebar.friends} />
    )
};