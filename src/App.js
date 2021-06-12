
import React from 'react';
import './components/App.css';
import './components/Header.css';
import './components/Navbar.css';
import './components/Profile.css';
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}




export default App;
