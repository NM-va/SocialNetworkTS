import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.scss';

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialogsItem}>
            <NavLink to={path} className={styles.userItem} activeClassName={styles.activeLink}>
                <img className={styles.avatar} src="https://wonder-day.com/wp-content/uploads/2020/03/wonder-day-otkrytki-prikhodi-55.jpg" alt=""/>
                <span>
                    {props.name}
                </span>
            </NavLink>
        </div>
    )
}