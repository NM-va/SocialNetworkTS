import React, {useState} from "react";
import styles from "./Pagination.module.scss";
import classNames from 'classnames/bind';

let cn = classNames.bind(styles);


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
        <nav>
            <ul className={"pagination"}>
                {portionNumber > 1 &&
                    <li className={"page-item"}>
                        <span className={"page-link"} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</span>
                    </li>
                }
                {
                    pages
                        .filter(((page: number) => page >= leftPortionPageNumber && page <= rightPortionPageNumber ))
                        .map(page => {
                        return (
                            <li className={` ${cn({active: currentPage === page}, "page-item")}`} key={page}>
                                <span className={"page-link"}  onClick={(e) => {
                                    onPageChanged(page)
                                }}>{page}</span>
                            </li>
                        )
                    })
                }
                {portionCount > portionNumber &&
                    <li className={"page-item"}>
                        <span className={"page-link"} onClick={() => setPortionNumber(portionNumber + 1)}>Next</span>
                    </li>
                }
            </ul>
        </nav>
    )
};