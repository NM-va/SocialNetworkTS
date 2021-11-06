import React from "react";
import styles from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: PropsType) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={styles.content}>
            {/*<div><img src="https://wallpaperaccess.com/full/1682070.jpg" alt=""/></div>*/}
            <div className={styles.descriptionBlock}>
                <div className={styles.avatar}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className={styles.description}>Description</div>
            </div>
        </div>
    )
}