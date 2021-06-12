import React from 'react';
import './Profile.css';
import Posts from "../Posts/Posts";


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
                <b className="line">Education:</b> Home learning
            </div>
            <div className="block_text">
                <b className="line">Web Site:</b> https://vk.com/verkruzo
            </div>
            <Posts />
        </div>
    );
}

export default Profile;