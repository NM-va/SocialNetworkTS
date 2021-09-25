import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';
import {ActionTypes} from "../../../redux/_store";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={path} className={styles.userItem}>
                <img className={styles.avatar} src="https://wonder-day.com/wp-content/uploads/2020/03/wonder-day-otkrytki-prikhodi-55.jpg" alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}