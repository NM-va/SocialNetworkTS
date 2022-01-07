import React, {ComponentType} from "react";
import {Dialogs} from "./Dialogs";
import {addMessageAC, InitialStateType} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    addMessage: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: StoreType) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (text: string) => {
            dispatch(addMessageAC(text));
        }
    }
}


const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;