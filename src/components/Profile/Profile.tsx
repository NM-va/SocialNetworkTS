import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileDomainType} from "../../redux/profile-reducer";
import {ProfileDataFormType} from "./ProfileInfo/ProfileDataForm";

type PropsType = {
    profile: ProfileDomainType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    isOwner: boolean
    saveProfile: (values: ProfileDataFormType) => Promise<any>
}

export const Profile:React.FC<PropsType> = ({
                                                profile,
                                                status,
                                                updateStatus,
                                                isOwner,
                                                savePhoto,
                                                saveProfile,
                                                ...props
}) => {
    return (
        <>
            <ProfileInfo isOwner={isOwner} savePhoto={savePhoto} profile={profile} saveProfile={saveProfile} status={status} updateStatus={updateStatus}/>
            {isOwner && <MyPostsContainer/>}
        </>
    )
};