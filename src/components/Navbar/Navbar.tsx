import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.scss';


export const Navbar = () => {
    return (
        <nav className={styles.mainNav}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className={styles.menu}>
                            <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.item}>Profile</NavLink>
                            <NavLink to="/dialogs" activeClassName={styles.activeLink} className={styles.item}>Message</NavLink>
                            <NavLink to="/users" activeClassName={styles.activeLink} className={styles.item}>Users</NavLink>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <div className={styles.menu}>
                            <NavLink to="/news" activeClassName={styles.activeLink} className={styles.item}>News</NavLink>
                            <NavLink to="/music" activeClassName={styles.activeLink} className={styles.item}>Music</NavLink>
                            <NavLink to="/settings" activeClassName={styles.activeLink} className={styles.item}>Settings</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};