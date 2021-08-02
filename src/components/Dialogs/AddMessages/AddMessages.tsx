import React, {ChangeEvent} from "react";
import styles from '../Dialogs.module.css';
import {ActionTypes, addMessageActionCreator, updateMessageActionCreator} from "../../../redux/state";

type PropsType = {
  newMessage: string
  // addMessageCallback: (textMessage: string) => void
  // updateMessageCallback: (textMessage: string) => void
  dispatch: (action: ActionTypes) => void
}

export const AddMessages = (props: PropsType) => {
  // let newMessageElement = React.useRef<HTMLTextAreaElement>(null);
  
  let addMessageHandler = () => {
    props.dispatch(addMessageActionCreator(props.newMessage));
    // props.addMessageCallback(props.newMessage);
  }
  
  let onMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateMessageActionCreator(e.currentTarget.value))
    // props.updateMessageCallback(e.currentTarget.value);
  }

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
