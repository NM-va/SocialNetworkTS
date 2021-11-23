import React from "react";
import styles from "../Dialogs.module.css";
import {useFormik} from "formik";

type PropsType = {
    addMessageCallback: (textMessage: string) => void
}

export const AddMessages = (props: PropsType) => {
    
    const formik = useFormik({
        initialValues: {
            newMessageBody: ""
        },
        validate: (values) => {
        
        },
        onSubmit: values => {
            props.addMessageCallback(values.newMessageBody);
        }
    })
    
    return (
        <form className={styles.createMessage}
              onSubmit={(e) => {
                  formik.handleSubmit(e);
                  // formik.resetForm();
              }}>
            
            <div>
                <textarea
                    {...formik.getFieldProps("newMessageBody")}
                    // value={props.newMessage}
                    // onChange={onMessageChangeHandler}
                    // name={"newMessageBody"}
                    className={styles.textField}></textarea>
            </div>
            <div>
                <button className={styles.btn} type="submit">Send</button>
            </div>
        </form>
    )
}
