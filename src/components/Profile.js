import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_Experiences_ReopeningBeaches_RF_1156532604_1280x640.jpg?itok=tPCjquVe"></img>
            </div>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/4481/4481101.png"></img>
            </div>

            <div>
                Dmitry K.
            </div>
            <div>
                <div>Date of Birth: 2 january</div>
                <div>City: Minsk</div>
                <div>Education: BSU '11</div>
                <div>Web Site: https://it-kamasutra.com</div>
            </div>
            <div>
                My posts
            </div>
            {/*<input type="text">your news..</input>*/}
            <button>Send</button>
        </div>
    );
}

export default Profile;