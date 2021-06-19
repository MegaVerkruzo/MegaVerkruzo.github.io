import classes from "./FindFriends.module.css";
import page from "./scroll.module.css";
import Human from "./Human/Human";
import React from "react";
import Fetching from "../common/Fetching/Fetching";

const FF = (props) => {

    let scroll = [];

    for (let i = 1; i <= Math.ceil(props.pageCount / props.pageSize); ++i) {
        scroll.push(i);
    }

    return (
        <div className={classes.block}>
            <div>
                { scroll.map(el => {
                    return <span className={props.currentPage === el && page.current__Page} onClick={ e => props.Change_Page(el)}>{`${el}`} </span>
                }) }
            </div>
            <div className={`${classes.block__title} title`}>
                Users:
            </div>
            <div className={classes.block__Fetching}>
                {props.isFetching ? <Fetching /> : null}
            </div>

            <div className={classes.block__list}>
                { props.showPeople.map(el => <Human Change_Flag={props.Change_Flag}
                                                         id={el.id} name={el.name}
                                                         followed={el.followed} image={el.photos.small}/>) }
            </div>
            <div className={classes.block__lowerPage}>
                <div className={classes.block__buttonPage}>
                    <div onClick={props.Show_More} className={`${classes.block__page_button} button`}>
                        Show more
                    </div>
                    <div onClick={props.Hide_Users} className={`${classes.block__page_button} button`}>
                        Hide users
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FF;