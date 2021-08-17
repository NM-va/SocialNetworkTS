import React from "react";
import {Friends} from "./Friends";
import {StoreType} from "../../redux/redux-store";
import {StoreContext} from "../../StoreContext";


export const FriendsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state = store.getState();

                    return (
                        <Friends friends={state.sidebar.friends}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};