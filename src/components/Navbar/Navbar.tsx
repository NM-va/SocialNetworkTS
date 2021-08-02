import React from "react";
import {NavLink, Route} from "react-router-dom";
import styles from './Navbar.module.css';
import {Friends} from "../Friends/Friends";
import {Sidebar} from "../../redux/state";


export const Navbar = (props: Sidebar) => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.item}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={styles.activeLink} className={styles.item}>Message</NavLink>
            <NavLink to="/news" activeClassName={styles.activeLink} className={styles.item}>News</NavLink>
            <NavLink to="/music" activeClassName={styles.activeLink} className={styles.item}>Music</NavLink>
            <NavLink to="/settings" activeClassName={styles.activeLink} className={styles.item}>Settings</NavLink>
            <Friends friends={props.friends} />
        </nav>
    )
}