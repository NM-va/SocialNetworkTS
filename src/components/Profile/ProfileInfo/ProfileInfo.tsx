import React, {ChangeEvent} from "react";
import styles from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/default_avatar.png";

type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}

export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto,
                                ...props
                            }: PropsType) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            savePhoto(event.target.files[0]);
        }
    };

    return (
        <div className={styles.content}>
            <div className={styles.descriptionBlock}>
                <div className={styles.avatar}>
                    <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt=""/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/> }
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={styles.description}>Description</div>
            </div>
        </div>
    )
}