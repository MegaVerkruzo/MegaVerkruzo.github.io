import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost, updateMessage} from "./redux/state";

export let reRender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateMessage={updateMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}