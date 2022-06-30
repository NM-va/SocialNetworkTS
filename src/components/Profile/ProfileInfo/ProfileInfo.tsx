import React, {ChangeEvent, useState} from "react";
import styles from './ProfileInfo.module.scss';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/default_avatar.png";
import {ProfileDataForm} from "./ProfileDataForm";

type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (file: any) => Promise<any>
}

export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto,
                                saveProfile,
                                ...props
                            }: PropsType) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            savePhoto(event.target.files[0]);
        }
    };

    const setEditModeCallback = (editModeValue: boolean) => {
      setEditMode(editModeValue);
    };

    const goToEditMode = () => {setEditMode(true)};

    return (
        <div className="card cardItem">
            <h4 className="titleInfo">Personal information</h4>
            <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                    <div className={styles.userAvatarImg}>
                        <img src={profile.photos.large || userPhoto} alt=""/>
                    </div>
                    {isOwner && <label className="btn chooseFile"><input type="file" onChange={onMainPhotoSelected}/>Choose file</label> }
                </div>
                <div className="col-md-8">
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
            <div className={styles.profileInfo}>
                <div className={`titleBox titleInfo`}>
                        <h4 className="">Profile info</h4>
                    {isOwner && !editMode && <button onClick={goToEditMode} className="btn btnText">Edit info <i className="bi bi-pencil"></i></button> }
                    </div>
                {
                    editMode
                        ? <ProfileDataForm  profile={profile} saveProfile={saveProfile} setEditMode={setEditModeCallback}/>
                        : <ProfileData profile={profile}/>
                }
            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    profile: ProfileType
}

const ProfileData:React.FC<ProfileDataPropsType> = ({profile}) => {
    const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

    return (
        <>
            <div className="row mb-2">
                <div className="col-md-4 fw-bold">Full name:</div>
                <div className="col-md-8">{profile?.fullName}</div>
            </div>
            <div className="row mb-2">
                <div className="col-md-4 fw-bold">Looking for a job:</div>
                <div className="col-md-8">{profile?.lookingForAJob ? "yes" : "no"}</div>
            </div>
            {profile?.lookingForAJob &&
            <div className="row mb-2">
                <div className="col-md-4 fw-bold">My professional skills:</div>
                <div className="col-md-8">{profile?.lookingForAJobDescription}</div>
            </div>}
            <div className="row mb-2">
                <div className="col-md-4 fw-bold">About me:</div>
                <div className="col-md-8">{profile?.aboutMe}</div>
            </div>
            <div className="mt-4">
                <h5 className="mb-3">Contacts:</h5>
                {getKeys(profile?.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile?.contacts[key]}/>
                })}
            </div>
        </>
    )
};


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact:React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className="row mb-2">
            <div className="col-md-4 fw-bold">{contactTitle}:</div>
            <div className="col-md-8">{contactValue}</div>
        </div>
    )
};