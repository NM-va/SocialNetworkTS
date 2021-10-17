import React from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessages} from "./AddMessages/AddMessages";
import {DialogsPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";

export const Dialogs = (props: DialogsPropsType) => {
    
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />);
    
   if (!props.isAuth) return <Redirect to={"/login"} />
    
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
              <div className={styles.messages}>
                {messagesElements}
              </div>
              <AddMessages newMessage={props.dialogsPage.newMessage}
                           addMessageCallback={props.addMessage}
                           updateMessageCallback={props.updateMessage}
              />
            </div>

        </div>
    )
};