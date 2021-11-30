import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";

export const Header = (props: AuthPropsType) => {
    return (
        <header className={styles.header}>
            {/*<img src="https://image.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg" alt=""/>*/}
            <a href="#" className={styles.headerLogo}>
                <img src="https://image.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149000884.jpg" alt=""/>
            </a>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onSubmit={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
};