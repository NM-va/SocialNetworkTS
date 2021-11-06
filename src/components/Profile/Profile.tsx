import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
};