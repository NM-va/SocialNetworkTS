import React from "react";
import styles from "./Music.module.scss";
import classNames from "classnames/bind";
import {SongItemType} from "../../redux/music-reducer";
let cn = classNames.bind(styles);

type SongListPropsType = {
    listSongs: SongItemType[]
    play: (active: any) => void
    active: boolean | number
}

const SongList:React.FC<SongListPropsType> = ({listSongs = [], play, active}: SongListPropsType) => {
    const handlePlay = (index: any) => play(index);
    return (
        <div className={styles.listSongs}>
            <h3 className={styles.listSongsTitle}>Songs</h3>
            <div className={styles.listSongsWrapper}>
                {listSongs.map((song: SongItemType, index: any) => (
                    <div className={`${cn (active === index ? 'active' : '', 'listSongsItem')}`} key={song.id}
                         style={{transitionDelay: `${0.075 * index}s`}} onClick={() => {handlePlay(index)}}>
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
                            <button className={`btn ${styles.songBtn}`} onClick={() => {handlePlay(0)}}>
                                <i className="bi bi-play-fill"></i>
                            </button>}
                    </div>
                ))}
            </div>
        </div>
)};

type SongPropsType = {
    stop: () => void
    next: () => void
    prev: () => void
    pause: boolean
}
const SongPlayPanel:React.FC<SongPropsType> = ({ stop, next, prev, pause}: SongPropsType) => {
    const handleToggleStop = () => {
        stop();
    };


    return (
        <div className={styles.songPlayPanel}>
            <div className={`${styles.play} ${styles.songControls}`}>
                <button className={`btn ${styles.songBtn} ${styles.prev}`}  disabled={!prev} onClick={prev}>
                    <i className="bi bi-skip-start-fill"></i>
                </button>
                <button className={`btn ${styles.songBtn}`} onClick={handleToggleStop}>
                    <i className={classNames("bi", pause ? "bi-play-fill" : "bi-pause-fill")}></i>
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
    active: boolean | number
    pause: boolean
    play: (active: any) => void
    stop: () => void
    next: () => void
    prev: () => void
}

export const Music = ({listSongs = [], play, stop, active, pause, prev, next}:PropsType) => {

    return (
        <>
            <SongList listSongs={listSongs} play={play} active={active} />
            {(active || active === 0) &&
                <SongPlayPanel stop={stop} pause={pause} prev={prev}
                           next={next}/>
            }
        </>
    )
};