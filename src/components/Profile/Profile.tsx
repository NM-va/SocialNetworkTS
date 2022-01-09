import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    isOwner: boolean
}

export const Profile:React.FC<PropsType> = ({
                                                profile,
                                                status,
                                                updateStatus,
                                                isOwner,
                                                savePhoto,
                                                ...props
}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} savePhoto={savePhoto} profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
};