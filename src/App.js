
//import React, {Component} from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Technologies />
    </div>
  );
}

const Header = () => {
    return (<div>
        <a href="#s">Home</a>
        <a href="#s">News Feed</a>
        <a href="#s">Message</a>
    </div>)
}

const Technologies = () => {
    return (<div>
        <ul>
            <li>Привет</li>
            <li>Привет</li>
        </ul>
    </div>);
}

export default App;
