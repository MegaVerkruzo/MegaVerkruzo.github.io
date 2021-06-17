import React from 'react';
import {Girl_Or_Man, Short_Surname} from "../../some_functions";
import './../../App.css'
import classes from './Human.module.css';


const Human = (props) => {

    let path = Girl_Or_Man(props.sex)
    let f_or_e = props.friend ? 'Unfollow' : 'Follow';//friend or enemy
    let sh_surname = Short_Surname(props.surname);


    let Change_Flat = () => {
        props.Change_Flag(props.id);
    }

    return (
        <div className={classes.block}>
            <div className={classes.block__summary}>
                <img src={path} className={`avatar`}></img>
                <div onClick={Change_Flat} className={`button ${classes.block__summary_button}`}>{`${f_or_e}`}</div>
            </div>
            <div className={classes.block__description}>
                <div className={`${classes.block__description_name} ${classes.block__description_text}`}>
                    {`${props.name} ${sh_surname}`}
                </div>
                <div className={`${classes.block__description_description} ${classes.block__description_text}`}>
                    {`${props.description}`}
                </div>
                <div className={`${classes.block__description_city} ${classes.block__description_text}`}>
                    {`${props.city}`}
                </div>
                <div className={`${classes.block__description_country} ${classes.block__description_text}`}>
                    {`${props.country}`},
                </div>
            </div>
        </div>
    );
}

export default Human;