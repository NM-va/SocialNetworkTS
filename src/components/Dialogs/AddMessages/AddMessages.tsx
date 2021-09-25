import React, {ChangeEvent} from "react";
import styles from "../Dialogs.module.css";

type PropsType = {
  newMessage: string
  addMessageCallback: (textMessage: string) => void
  updateMessageCallback: (textMessage: string) => void
}

export const AddMessages = (props: PropsType) => {

  let addMessageHandler = () => {
    props.addMessageCallback(props.newMessage);
  };
  
  let onMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.updateMessageCallback(e.currentTarget.value);
  };

    return (
      <form className={styles.createMessage}>
          Enter message
          <div>
              <textarea
                value={props.newMessage}
                onChange={onMessageChangeHandler}
                name={'newMessageBody'}
                className={styles.textField}></textarea>
          </div>
          <div>
              <button onClick={addMessageHandler} className={styles.btn} type="button">Send</button>
          </div>
      </form>
    )
}
