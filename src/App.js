
import React from 'react';
import './components/App.css';
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import Posts from "./components/Posts/Posts.js";

const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Profile />
        <Posts />
    </div>
  );
}

export default App;
