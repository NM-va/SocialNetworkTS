import React from "react";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import styles from "./Music.module.scss";
import {Music} from "./Music";
import {compose} from "redux";
import {SongItemType} from "../../redux/music-reducer";


type MapStatePropsType = {
    songList: SongItemType[]
}

export type MusicPropsType = MapStatePropsType;

let mapStateToProps = (state: StoreType) => {
    return {
        songList: state.music.songList
    }
};

class MusicContainer extends React.Component<MusicPropsType> {
    state = {
        active: false,
        pause: false
    };

    togglePause = () => {
        this.setState({ pause: !this.state.pause});
    };
    handlePlay = (active: any) => {
        this.setState({
            active: this.state.active === active ? false : active
        })
    };
    next = () => {
        this.handlePlay(Number(this.state.active) < Number(this.props.songList.length) - 1 ? Number(this.state.active) + 1 : 0)
    };
    prev = () => {
        this.handlePlay(Number(this.state.active) > 0 ? Number(this.state.active) - 1 : this.props.songList.length - 1)
    };

    render(){
        const {active, pause} = this.state;
        return (
            <div className={`card cardItem ${styles.playlist}`}>
                <Music listSongs={this.props.songList}
                       play={this.handlePlay}
                       active={active}
                       pause={pause}
                       stop={this.togglePause}
                       next={this.next}
                       prev={this.prev}/>
            </div>
        )
    }
}

export default compose<React.ComponentType> (connect(mapStateToProps, {}))(MusicContainer);