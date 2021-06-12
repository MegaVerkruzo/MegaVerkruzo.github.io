
import React from 'react';
import './components/App.css';
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content block">
            <Dialogs />
        </div>
        {/*<Profile />*/}
    </div>
  );
}

export default App;
