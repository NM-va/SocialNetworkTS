import React from "react";
import styles from "../Dialogs.module.scss";


type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={styles.messagesItem}>{props.message}</div>
    )
}
