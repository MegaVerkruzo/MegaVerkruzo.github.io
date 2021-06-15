import React from 'react';
import './components/App.css';
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.NavBarPage}/>
                <div className="app-wrapper-content block">
                    <Route path="/dialogs" render = { () => <Dialogs state={props.state.dialogPage} addMessageDialog={props.addMessageDialog} updateMessageDialog={props.updateMessageDialog}/> }/>
                    <Route path="/profile" render = { () => <Profile state={props.state.profilePage} addPost={props.addPost} updateMessage={props.updateMessage}/> }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
