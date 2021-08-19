import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import { connect } from "react-redux";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";



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
            dispatch(updateMessageActionCreator(text))
        },
        addMessage: (text: string) => {
            dispatch(addMessageActionCreator(text));
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);