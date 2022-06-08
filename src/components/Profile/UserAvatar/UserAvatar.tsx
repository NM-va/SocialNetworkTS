import React from "react";
import userPhoto from "../../../assets/images/default_avatar.png";
import {ProfileType} from "../../../redux/profile-reducer";

type PropsType = {
    login: string | null
    profile: ProfileType | null
}

const MyPostForm = (props: PropsType) => {

    return (
        <div className="userProfileAvatar">
            <a href="#">
                <div className="userProfileAvatarSmall">
                    <img src={props.profile?.photos.large || userPhoto} alt="profile avatar" />
                </div>
            </a>
        </div>
        // <div className={"userAvatarBox"}>
        //     <div className={"userAvatar"}>
        //         <img src={this.props.profile?.photos.large || userPhoto} alt=""/>
        //     </div>
        //     <h5>{this.props.login}</h5>
        // </div>
    )
};