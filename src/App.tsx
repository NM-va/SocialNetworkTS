import React, { Suspense } from "react";
import "./App.scss";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/User/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {StoreType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {WithSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

type MapDispatchToProps = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

export type InitializePropsType = MapStateToPropsType & MapDispatchToProps

class App extends React.Component<InitializePropsType, StoreType> {
    catchAllUnhandeledErrors = () => {
        alert('Some error occured');
        console.error(PromiseRejectionEvent);
    };
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhadledrejection', this.catchAllUnhandeledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhadledrejection', this.catchAllUnhandeledErrors)
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
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                    </Switch>
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
