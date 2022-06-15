import React from "react";
import {UsersNewsTypeProps} from "./NewsContainer";
import {NewsItem} from "./NewsItem";


export const News = (props: UsersNewsTypeProps) => {
    let newsList = props.users.map(user => {
        return (
            <NewsItem key={user.id} name={user.name} id={user.id} avatar={user.avatar}
                      address={user.address} news={user.news} />
        )
    });

    return (
        <>
            {newsList}
        </>
    )
};