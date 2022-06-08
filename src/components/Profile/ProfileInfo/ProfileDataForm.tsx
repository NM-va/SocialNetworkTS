import React from "react";
import styles from "./ProfileInfo.module.scss";
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
            <div className="row mb-2">
                <label htmlFor="fullName" className="col-sm-4 col-form-label fw-bold">FullName</label>
                <div className="col-sm-8">
                    <input type="text" id="fullName" className="form-control" placeholder="fullName" {...formik.getFieldProps("fullName")}/>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-12">
                    <div className="form-check pt-1 pb-1">
                        <input type="checkbox" className="form-check-input" id="lookingForAJob" {...formik.getFieldProps("lookingForAJob")}/>
                        <label htmlFor="lookingForAJob" className="customCheckbox fw-bold">Looking for a job</label>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="myProfessionalsSkills"  className="col-sm-4 col-form-label fw-bold">My professionals skills</label>
                <div className="col-sm-8">
                    <textarea id="myProfessionalsSkills" className="form-control" {...formik.getFieldProps("lookingForAJobDescription")}
                        placeholder="myProfessionalsSkills"></textarea>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="aboutMe"  className="col-sm-4 col-form-label fw-bold">About me</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="aboutMe"  {...formik.getFieldProps("aboutMe")}/>
                </div>
            </div>
            <div className="mt-4">
                <h5 className="mb-3">Contacts</h5>
                {getKeys(profile?.contacts).map((key) => {
                    return (
                        <div className="row mb-2" key={key}>
                            <label className="col-sm-4 col-form-label fw-bold" htmlFor="contactName">{key}:</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder={key}
                                       {...formik.getFieldProps(`contacts.${key}`)}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={"d-flex justify-content-end mt-3"}><button className="btn btnCustom" type="button">Save changes</button></div>
        </form>
    )
};