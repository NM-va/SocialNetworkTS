import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            {/*<img src="https://image.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg" alt=""/>*/}
            <a href="#" className={styles.headerLogo}><img src="https://image.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149000884.jpg" alt=""/></a>
        </header>
    )
}