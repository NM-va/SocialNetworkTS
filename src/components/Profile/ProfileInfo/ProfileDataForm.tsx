import React from "react";
import styles from "./ProfileInfo.module.css";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import {FormikErrorType} from "../../../api/api";

type ProfileDataFromPropsType = {
    profile: ProfileType
    saveProfile: (values: ProfileDataFormType) => Promise<any>
    setEditMode: (editModeValue: boolean) => void
}

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}

const SignupSchema = Yup.object().shape({

});

export const ProfileDataForm: React.FC<ProfileDataFromPropsType> = ({profile, saveProfile, setEditMode}) => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            lookingForAJob: false,
            lookingForAJobDescription: "",
            aboutMe: "",
            contacts: {
                facebook: "",
                website: "",
                vk: "",
                twitter: "",
                instagram: "",
                youtube: "",
                github: "",
                mainLink: ""
            }
        },
        enableReinitialize: true,
        validationSchema: SignupSchema,
        onSubmit: values => {
            console.log(values);
            saveProfile(values)
                .then(() => {
                    setEditMode(false);
                })
        }
    });

    const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

    return (
        <form className={styles.description} onSubmit={(e) => {

            formik.handleSubmit(e);
        }}>
            <div><button>Save</button></div>
            <div>
                <label htmlFor="fullName"  className="textBold">FullName</label>
                <input type="text" id="fullName" placeholder="fullName" {...formik.getFieldProps("fullName")}/>
            </div>
            <div>
                <input type="checkbox" id="lookingForAJob" {...formik.getFieldProps("lookingForAJob")}/>
                <label htmlFor="lookingForAJob">lookingForAJob</label>
            </div>
            <div>
                <label htmlFor="myProfessionalsSkills"  className="textBold">My professionals skills</label>
                <textarea id="myProfessionalsSkills" {...formik.getFieldProps("lookingForAJobDescription")}
                           placeholder="myProfessionalsSkills"></textarea>
            </div>
            <div>
                <label htmlFor="aboutMe"  className="textBold">About me</label>
                <input type="text" placeholder="aboutMe"  {...formik.getFieldProps("aboutMe")}/>
            </div>
            <div>
                <span className="textBold">Contacts:</span>
                {getKeys(profile?.contacts).map((key) => {
                    return (
                        <div key={key}>
                            <div className="textBold">
                                <label htmlFor="contactName">{key}:</label>
                                <input type="text" placeholder={key}
                                    {...formik.getFieldProps(`contacts.${key}`)}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </form>
    )
};