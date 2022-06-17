import React, {CSSProperties} from "react";
import "./App.scss";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
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
import headerMainImg from "./assets/images/summer.jpg";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {ProfileType} from "./redux/profile-reducer";
import {PhotosType, UserAvatar} from "./components/Profile/UserAvatar/UserAvatar";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

type MapDispatchToProps = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
    login: string | null
    photos: PhotosType | undefined
}

export type InitializePropsType = MapStateToPropsType & MapDispatchToProps

const headerMainBg: CSSProperties = {
    backgroundImage: `url("${headerMainImg}")`
};

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
                <main>
                    <div className="headerMain">
                        <div className="headerTopMain" style={headerMainBg}>
                            <div className={"userAvatarBigBox"}>
                                <UserAvatar photos={this.props.photos} avatarClassName={"userAvatarBig"} address={"/"} sizePhoto={"large"}/>
                                <h5>{this.props.login}</h5>
                            </div>
                        </div>
                        <Navbar/>
                    </div>
                    <section className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <aside>
                                        <FriendsContainer />
                                    </aside>
                                </div>
                                <div className="col-md-9">
                                    <Switch>
                                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                        <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                                        <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                                        <Route path='/users' render={() => <UsersContainer/>}/>
                                        <Route path='/news' render={() => <NewsContainer/>}/>
                                        <Route path='/music' render={() => <MusicContainer/>}/>
                                        <Route path='/settings' render={() => <Settings/>}/>
                                        <Route path='/login' render={() => <LoginContainer/>}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

const MapStateToProps = (state: StoreType): MapStateToPropsType => ({
    initialized: state.app.initialized,
    login: state.auth.login,
    photos: state.profilePage.profile?.photos
});

export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App);
