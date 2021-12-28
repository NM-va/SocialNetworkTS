import React from "react";
import "./App.css";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/User/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {StoreType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapDispatchToProps = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

export type InitializePropsType = MapStateToPropsType & MapDispatchToProps

class App extends React.Component<InitializePropsType, StoreType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state: StoreType): MapStateToPropsType => ({
    initialized: state.app.initialized
});

export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App);
