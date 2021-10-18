import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import { connect } from "react-redux";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    updateMessage: (text: string) => void
    addMessage: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: StoreType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateMessage: (text: string) => {
            dispatch(updateMessageAC(text))
        },
        addMessage: (text: string) => {
            dispatch(addMessageAC(text));
        }
    }
}


let AuthRedirectComponent = withAuthRedirect(Dialogs);


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);