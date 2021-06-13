import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const contactData = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Alexey"},
    {id: 3, name: "Lena"},
    {id: 4, name: "Darya"},
    {id: 5, name: "Sergey"},
    {id: 6, name: "Airat"}
]

const messageData = [
    {id: 1, message:"Hi, i waant learn ReactJS"},
    {id: 2, message:"Like"},
    {id: 3, message:"Wow, this is cool"},
    {id: 4, message:"3"},
    {id: 5, message:"76"}
]

const postData = [
    {id: 1, message: "Hi, how are you", likes: 43},
    {id: 2, message: "I am fine, thank you", likes: 4},
]

ReactDOM.render(
  <React.StrictMode>
    <App contactData={contactData} messageData={messageData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
