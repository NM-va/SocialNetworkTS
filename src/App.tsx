import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) =>  {
    
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar store={props.store} />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                    />}/>
                    <Route path='/profile' render={() => <Profile store={props.store}
                    />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}ж

export default App;
