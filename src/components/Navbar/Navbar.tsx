import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css';
import {StoreType} from "../../../redux/redux-store";
import {FriendsContainer} from "../Friends/FriendsContainer";


type TypesProps = {
    store: StoreType
}

export const Navbar = (props: TypesProps) => {

    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.item}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={styles.activeLink} className={styles.item}>Message</NavLink>
            <NavLink to="/news" activeClassName={styles.activeLink} className={styles.item}>News</NavLink>
            <NavLink to="/music" activeClassName={styles.activeLink} className={styles.item}>Music</NavLink>
            <NavLink to="/settings" activeClassName={styles.activeLink} className={styles.item}>Settings</NavLink>
            <FriendsContainer store={props.store} />
        </nav>
    )
}