import React, {useState} from "react";
import styles from "../Header.module.scss";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/default_avatar.png";
import {ProfileType} from "../../../redux/profile-reducer";

export type PropsType = {
    login: string | null
    email: string | null
    logout: () => void
    profile: ProfileType | null
}

export const HeaderProfileSettings = (props: PropsType) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    return (
        <>
            <button className={styles.profileTrigger} onClick={toggleDropdown}>
                <img className={styles.smallUserAvatar} src={props.profile?.photos.large || userPhoto} alt="profile picture"/>
            </button>
            {isOpenDropdown &&
                <div className={styles.profileDropdown}>
                    <div className={styles.profileHead}>
                        <h6 className={styles.userName}>
                            <NavLink to="/profile" activeClassName={styles.activeLink}  className={styles.userName}>
                                {props.login}
                            </NavLink>
                        </h6>
                        <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.userMail}>{props.email}</NavLink>
                    </div>
                    <div className={styles.profileBody}>
                        <ul>
                            <li><a href="profile.html"><i className="bi bi-person"></i>Profile</a></li>
                            <li><a href="#"><i className="bi bi-envelope"></i>Message</a></li>
                        </ul>
                        <ul>
                            <li><a href="signup.html" onSubmit={props.logout}><i className="bi bi-door-open"></i>Sing
                                    out</a></li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
};