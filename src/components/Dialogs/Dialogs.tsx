import React from "react";
import styles from "./Dialogs.module.scss";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessages} from "./AddMessages/AddMessages";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {
    
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);
    
    return (
        <div className="card cardItem">
            <div className={styles.dialogs}>
                <div className={styles.dialogsUsers}>
                    {dialogsElements}
                </div>
                <div className={styles.messagesBox}>
                    <div className={styles.messages}>
                        {messagesElements}
                    </div>
                    <h5 className="mt-4">Enter message</h5>
                    <AddMessages addMessageCallback={props.addMessage}/>
                </div>
            </div>
        </div>
    )
};