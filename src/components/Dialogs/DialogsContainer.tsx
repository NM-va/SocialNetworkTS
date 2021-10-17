import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import { connect } from "react-redux";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateMessage: (text: string) => void
    addMessage: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: StoreType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);