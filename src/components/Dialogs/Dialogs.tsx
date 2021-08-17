import React from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessages} from "./AddMessages/AddMessages";
import {DialogType, MessageType} from "../../redux/store";


type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
    addMessage: (textMessage: string) => void
    updateMessage: (textMessage: string) => void
}

export const Dialogs = (props: PropsType) => {
    
    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} />);
    
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
              <div className={styles.messages}>
                {messagesElements}
              </div>
              <AddMessages newMessage={props.newMessage}
                           addMessageCallback={props.addMessage}
                           updateMessageCallback={props.updateMessage}
              />
            </div>

        </div>
    )
};