import React from "react";
import styles from "./Pagination.module.css"

type PropsType = {
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = ({
                               totalUsersCount,
                               pageSize,
                               currentPage,
                               onPageChanged,
                               ...props
                           }: PropsType) => {
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    
    return (
        <ul className={styles.pagination}>
            {
                pages.map(page => {
                    return (
                        <li className={`${currentPage === page ? styles.selectedPage : ""} ${styles.pageItem}`}
                            onClick={(e) => {
                                onPageChanged(page)
                            }}
                        >{page}</li>
                    )
                })
            }
        </ul>
    )
}