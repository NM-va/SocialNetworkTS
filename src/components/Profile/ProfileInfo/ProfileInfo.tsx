import React, {ChangeEvent, useState} from "react";
import styles from './ProfileInfo.module.css';
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

    return (
        <div className={styles.content}>
            <div className={styles.descriptionBlock}>
                <div className={styles.avatar}>
                    <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt=""/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/> }
                </div>
                {
                    editMode
                        ? <ProfileDataForm  profile={profile} saveProfile={saveProfile} setEditMode={setEditModeCallback}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>
                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData:React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

    return (
        <div className={styles.description}>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div> }

            <div><span className="textBold">Full name:</span> {profile?.fullName}</div>
            <div><span className="textBold">Looking for a job:</span> {profile?.lookingForAJob ? "yes" : "no"}</div>
            {profile?.lookingForAJob &&
            <div><span className="textBold">My professional skills:</span> {profile?.lookingForAJobDescription}</div>}
            <div><span className="textBold">About me:</span> {profile?.aboutMe}</div>
            <div>
                <span className="textBold">Contacts:</span>
                {getKeys(profile?.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile?.contacts[key]}/>
                })}
            </div>
        </div>
    )
};


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact:React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div><span className="textBold">{contactTitle}:</span> {contactValue}</div>
    )
};