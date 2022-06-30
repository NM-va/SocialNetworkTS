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
            
            <div className="mb-2">
                <textarea
                    {...formik.getFieldProps("newMessageBody")}
                    className="form-control" ></textarea>
                { hasError ? <div className={"error-message"}>{formik.errors.newMessageBody}</div> : null}
            </div>
            <div className={"d-flex justify-content-end mt-3"}><button className="btn btnCustom" type="button">Send</button></div>
        </form>
    )
}
