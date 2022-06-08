import React from "react";
import userPhoto from "../../../assets/images/default_avatar.png";
import {ProfileType} from "../../../redux/profile-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    profile: ProfileType | null
    avatarClassName: string
}

export const UserAvatar = (props: PropsType) => {
    return (
        <NavLink className={props.avatarClassName} to={'/'}>
            <img className="userAvatarImg" src={props.profile?.photos.large || userPhoto} alt="profile avatar" />
        </NavLink>
    )
};