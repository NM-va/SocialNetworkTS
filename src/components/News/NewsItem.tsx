import React from "react";
import styles from "./News.module.scss";
import {NavLink} from "react-router-dom";
import {NewsFriendItemType} from "../../redux/news-reducer";


export const NewsItem = (props: NewsFriendItemType) => {

    return (
        <div className="card cardItem mb-4">
            <div className="newsTitle mb-3">
                <div className={"userItemBox"}>
                    <NavLink className="userAvatarSmall" to={props.address}>
                        <img className="userAvatarImg" src={props.avatar} alt=""/>
                    </NavLink>
                    <div className="userInfo">
                        <NavLink className="userName" to={props.address}>{props.name}</NavLink>
                    </div>
                </div>
            </div>
            <div className="newsContent">
                {props.news.textNews}
                <div className={styles.newsMeta}>
                    <button className="btn btnText btn-meta-like">
                        <i className="bi bi-heart-pulse me-2"></i>
                        {props.news.likes}
                    </button>
                </div>
            </div>
        </div>
    )
};