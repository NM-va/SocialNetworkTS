import React from "react";
import styles from "./Music.module.scss";
import classNames from "classnames/bind";
import {SongItemType} from "../../redux/music-reducer";

type SongListPropsType = {
    listSongs: SongItemType[]
    active: any//boolean
    play: (active: any) => void
}

const SongList:React.FC<SongListPropsType> = ({listSongs = [], play, active}: SongListPropsType) => {

    return (
        <div className={styles.listSongs}>
            <h3 className={styles.listSongsTitle}>Songs</h3>
            <div className={styles.listSongsWrapper}>
                {listSongs.map((song: SongItemType, index: any) => (
                    <div className={`${styles.listSongsItem} ${active === index ? 'active' : ''}`} key={song.id}
                         style={{transitionDelay: `${0.075 * index}s`}} onClick={() => play(index)}>
                         <span className={styles.listSongsImgBox} style={{transitionDelay: `${0.075 * index}s`}}>
                           <img src={song.imgSrc}/>
                         </span>
                        <div className={styles.songInfo}>
                            <span className={styles.songName}>{song.name}</span>
                            <span className={styles.songAuthor}>{song.author}</span>
                        </div>
                        <span className={styles.songDuration}
                              style={{transitionDelay: `${0.075 * index}s`}}>{song.duration}</span>
                        {(!active && active !== 0) &&
                            <button className={`btn ${styles.songBtn}`} onClick={() => play(0)}>
                                <i className={classNames("bi bi-play-fill")}></i>
                            </button>}
                    </div>
                ))}
            </div>
        </div>
)};

type SongPropsType = {
    idx: any//boolean
    stop: (active: any) => void
    next: () => void
    prev: () => void
    pause: boolean
}
const SongPlayPanel:React.FC<SongPropsType> = ({ idx, stop, next, prev, pause}: SongPropsType) => {

    return (
        <div className={styles.songPlayPanel}>
            <div className={styles.songControls}>
                <button className={`btn ${styles.songBtn} ${styles.prev}`}  disabled={!prev} onClick={prev}>
                    <i className="bi bi-skip-start-fill"></i>
                </button>
                <button className={`btn ${styles.songBtn}`} onClick={() => stop(idx)}>
                    <i className={classNames("bi", pause ? "bi-pause-fill" : "bi-play-fill")}></i>
                </button>
                <button className={`btn ${styles.songBtn} ${styles.next}`} disabled={!next} onClick={next}>
                    <i className="bi bi-skip-end-fill"></i>
                </button>
                <button className={`btn ${styles.songBtn}`}>
                    <i className="bi bi-shuffle"></i>
                </button>
                <button className={`btn ${styles.songBtn}`}>
                    <i className="bi bi-arrow-repeat"></i>
                </button>
            </div>
            <div className={styles.info__status}><span></span></div>
        </div>
    )
};

type PropsType = {
    listSongs: SongItemType[]
    active: any
    idx: any
    pause: boolean
    play: (active: any) => void
    stop: (active: any) => void
    next: () => void
    prev: () => void
}

export const Music = ({listSongs = [], stop, active, idx, pause, prev, next}:PropsType) => {

    return (
        <>
            <SongList listSongs={listSongs} play={stop} active={active} />
            <SongPlayPanel idx={idx} stop={stop} pause={pause} prev={prev} next={next}/>
        </>
    )
}