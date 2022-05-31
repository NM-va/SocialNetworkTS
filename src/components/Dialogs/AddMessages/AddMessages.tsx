import React from "react";
import styles from "../Dialogs.module.scss";
import {useFormik} from "formik";
import * as Yup from "yup";

type PropsType = {
    addMessageCallback: (textMessage: string) => void
}

const SignupSchema = Yup.object().shape({
    newMessageBody: Yup.string()
        .max(30, 'Too Long!')
        .required('Required'),
});

export const AddMessages = (props: PropsType) => {
    
    const formik = useFormik({
        initialValues: {
            newMessageBody: ""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            props.addMessageCallback(values.newMessageBody);
        }
    });

    const hasError = formik.touched.newMessageBody && formik.errors.newMessageBody;
    
    return (
        <form className={styles.createMessage}
              onSubmit={(e) => {
                  formik.handleSubmit(e);
                  // formik.resetForm();
              }}>
            
            <div>
                <textarea
                    {...formik.getFieldProps("newMessageBody")}
                    className={styles.textField}></textarea>
                { hasError ? <div className={"error-message"}>{formik.errors.newMessageBody}</div> : null}
            </div>
            <div>
                <button className={styles.btn} type="submit">Send</button>
            </div>
        </form>
    )
}
