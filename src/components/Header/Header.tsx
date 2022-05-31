import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";
import {HeaderProfileSettings} from "./HeaderProfileSettings/HeaderProfileSettings";

export const Header = (props: AuthPropsType) => {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerTop} ${styles.sticky} d-none d-lg-block`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <div className={`${styles.headerLogo} text-center`}>
                                <a href="index.html">
                                    <img src="https://image.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149000884.jpg" alt="brand logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="d-flex align-items-center justify-content-end">
                                <div className={styles.profileSettingBox}>
                                    {props.isAuth
                                        ? <HeaderProfileSettings login={props.login} logout={props.logout}/>
                                        : <NavLink to={'/login'}>Login</NavLink>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};