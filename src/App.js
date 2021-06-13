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
    const Route_Dialogs = () => <Dialogs contactData={props.contactData} messageData={props.messageData}/>;
    const Route_Profile = () => <Profile postData={props.postData}/>

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content block">
                    <Route path="/dialogs" component={Route_Dialogs}/>
                    <Route path="/profile" component={Route_Profile}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
