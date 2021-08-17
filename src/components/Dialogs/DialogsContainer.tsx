import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";


type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator(state.dialogsPage.newMessage));
    };

    let onMessageChange = (text:string) => {
        props.store.dispatch(updateMessageActionCreator(text))
    };

    
    return (
        <Dialogs addMessage={addMessage} updateMessage={onMessageChange}
                 dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                 newMessage={state.dialogsPage.newMessage} />
    )
}