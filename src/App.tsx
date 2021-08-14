import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) =>  {
    const state = props.store.getState();
    let dialogs = state.dialogsPage.dialogs;
    let message = state.dialogsPage.messages;
    let newMessage = state.dialogsPage.newMessage;
    let posts = state.profilePage.posts;
    let messageNewPost = state.profilePage.messageNewPost;
    let friends = state.sidebar.friends;
    
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={friends} />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs}
                                                                  messages={message}
                                                                  newMessage={newMessage}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/profile' render={() => <Profile posts={posts}
                                                                  postMessage={messageNewPost}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
