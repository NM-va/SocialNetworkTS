import React, {useEffect, useState} from "react";
import styles from "../Header.module.scss";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/default_avatar.png";
import {ProfileDomainType} from "../../../redux/profile-reducer";

export type PropsType = {
    login: string | null
    email: string | null
    logout: () => void
    profile: ProfileDomainType | null
}

export const HeaderProfileSettings = ({login, email, logout, profile}: PropsType) => {

    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
    const [ownerAvatar, setOwnerAvatar] = useState<string>('');
    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };
    let srcAvatar = profile?.photos.large || userPhoto;

    useEffect(() => {
        if (profile?.isOwner) {
            setOwnerAvatar(srcAvatar)
        }
    }, [ownerAvatar, profile?.isOwner]);


    return (
        <>
            <button className={styles.profileTrigger} onClick={toggleDropdown} type="button">
                <img className={styles.smallUserAvatar} src={ownerAvatar} alt="profile picture"/>
            </button>
            {isOpenDropdown &&
                <div className={styles.profileDropdown}>
                    <div className={styles.profileHead}>
                        <h6 className={styles.userName}>
                            <NavLink to="/profile" activeClassName={styles.activeLink}  className={styles.userName}>
                                {login}
                            </NavLink>
                        </h6>
                        <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.userMail}>{email}</NavLink>
                    </div>
                    <div className={styles.profileBody}>
                        <ul>
                            <li>
                                <NavLink to="profile.html"><i className="bi bi-person"></i>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to=""><i className="bi bi-envelope"></i>Message</NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <NavLink to="signup.html" onSubmit={logout}><i className="bi bi-door-open"></i>Sing
                                    out</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
};