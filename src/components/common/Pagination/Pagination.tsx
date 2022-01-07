import React, {useState} from "react";
import styles from "./Pagination.module.css"

type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = ({
                               totalItemsCount,
                               pageSize,
                               currentPage,
                               onPageChanged,
                               portionSize = 10,
                               ...props
                           }: PropsType) => {
    let pagesCount: number = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    
    return (
        <ul className={styles.pagination}>
            {portionNumber > 1 &&
                <li>
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
                </li>
            }

            {
                pages.map(page => {
                    return (
                        <li className={`${currentPage === page ? styles.selectedPage : ""} ${styles.pageItem}`}
                            key={page}
                            onClick={(e) => {
                                onPageChanged(page)
                            }}
                        >{page}</li>
                    )
                })
            }
            {portionCount > portionNumber &&
                <li>
                    <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
                </li>
            }
        </ul>
    )
}