import React from "react";
import userPhoto from "../../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";

export type PhotosType = {
    large: string,
    small: string
}
export type sizePhotoType = "large" | "small"

type PropsType = {
    photos: PhotosType | undefined
    avatarClassName: string
    address: string
    sizePhoto: sizePhotoType
}

export const UserAvatar = (props: PropsType) => {
    return (
        <NavLink className={props.avatarClassName} to={props.address}>
            <img className="userAvatarImg" src={props.photos?.[props.sizePhoto] || userPhoto} alt="profile avatar" />
        </NavLink>
    )
};