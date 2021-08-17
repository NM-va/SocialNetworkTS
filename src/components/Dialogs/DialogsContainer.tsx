import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator(state.dialogsPage.newMessage));
                    };

                    let onMessageChange = (text: string) => {
                        store.dispatch(updateMessageActionCreator(text))
                    };

                    return (
                        <Dialogs addMessage={addMessage} updateMessage={onMessageChange}
                                 dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                                 newMessage={state.dialogsPage.newMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}