import React from 'react';
import './Profile.css';


const Profile = () => {
    return (
        <div className='content block'>
            <div>
                <img id="wall" src="http://elitefon.ru/pic/201302/1920x1080/elitefon.ru-32867.jpg"></img>
            </div>
            <div>
                <img id="icon" src="https://image.flaticon.com/icons/png/512/4481/4481101.png"></img>
            </div>

            <div className="block_text">
                <b className="line">Full name:</b> Grunskie Alexey
            </div>
            <div className="block_text">
                <b className="line">Date of Birth:</b> 3 April
            </div>
            <div className="block_text">
                <b className="line">City:</b> Naberezhnye Chelny
            </div>
            <div className="block_text">
                <b className="line">Education:</b> BSU '11
            </div>
            <div className="block_text">
                <b className="line">Web Site:</b> https://it-kamasutra.com
            </div>
            <br></br>
            <b className="block_text">
                My posts
            </b>
            {/*<input type="text">your news..</input>*/}
            <button>Send</button>
        </div>
    );
}

export default Profile;