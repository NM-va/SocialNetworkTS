import React, {useState} from "react";
import styles from "../Header.module.scss";
import {NavLink} from "react-router-dom";

export type PropsType = {
    login: string | null
    logout: () => void
}

export const HeaderProfileSettings = (props: PropsType) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    return (
        <div className={styles.profileThumbSmall}>
            <button className={styles.profileTrigger} onClick={toggleDropdown}>
                <img src="assets/images/profile/profile-35x35-1.jpg" alt="profile picture"/>
            </button>
            {isOpenDropdown &&
                <div className={styles.profileDropdown}>
                    <div className={styles.profileHead}>
                        <h6 className={styles.userName}>
                            <NavLink to="/profile" activeClassName={styles.activeLink}  className={styles.userName}>
                                Madison Howard
                            </NavLink>
                        </h6>
                        <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.userMail}>{props.login}</NavLink>
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
        </div>
    )
};