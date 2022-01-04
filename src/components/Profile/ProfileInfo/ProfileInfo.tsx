import React from "react";
import styles from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                ...props
                            }: PropsType) => {
    if(!profile) {
        return <Preloader />
    }
    return (
        <div className={styles.content}>
            <div className={styles.descriptionBlock}>
                <div className={styles.avatar}>
                    <img src={profile.photos.large} alt=""/>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={styles.description}>Description</div>
            </div>
        </div>
    )
}