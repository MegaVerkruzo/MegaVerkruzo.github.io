import React from 'react';
import {Girl_Or_Man, Short_Surname} from "../../some_functions";
import './../../App.css'
import classes from './Human.module.css';
import {NavLink} from "react-router-dom";


const Human = (props) => {

    let path = Girl_Or_Man(props.followed ? "Male" : "Female");
    let f_or_e = props.followed ? 'Follow' : 'Unfollow';//friend or enemy


    let Change_Flag = () => {
        props.Change_Flag(props.id);
    }

    return (
        <div className={classes.block}>
            <div className={classes.block__summary}>

                <NavLink to={`/profile/${props.id}`}>
                    <img src={path} className={`avatar ${classes.block__summary_img}`}></img>
                </NavLink>

                <div onClick={Change_Flag} className={`button ${classes.block__summary_button}`}>{`${f_or_e}`}</div>
            </div>
            <div className={classes.block__description}>
                <div className={`${classes.block__description_name} ${classes.block__description_text}`}>
                    {`${props.name}`}
                </div>
                <div className={`${classes.block__description_description} ${classes.block__description_text}`}>
                    {``}
                </div>
                <div className={`${classes.block__description_city} ${classes.block__description_text}`}>

                </div>
                <div className={`${classes.block__description_country} ${classes.block__description_text}`}>
                    ,
                </div>
            </div>
        </div>
    );
}

export default Human;