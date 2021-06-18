import React from 'react';
import classes from './FindFriends.module.css';
import './../App.css';
import Human from "./Human/Human";
import axios from "axios";
import page from './scroll.module.css';

class FindFriends extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.Show_More(response.data.items);
            });
    }

    Show_More = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.Show_More(response.data.items);
            });
    };

    Hide_Users = () => {
        this.props.Hide_Users();
    };

    Change_Page = p => {
        this.props.Change_Page(p);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.Show_More(response.data.items);
            });
    }

    render() {

        let scroll = [];

        for (let i = 1; i <= Math.ceil(this.props.pageCount / this.props.pageSize); ++i) {
            scroll.push(i);
        }

        return (
            <div className={classes.block}>
                <div>
                    { scroll.map(el => {
                        return <span className={this.props.currentPage === el && page.current__Page} onClick={ e => this.Change_Page(el)}>{`${el}`} </span>
                    }) }

                </div>
                <div className={`${classes.block__title} title`}>
                    Users:
                </div>
                <div className={classes.block__list}>
                    { this.props.showPeople.map(el => <Human Change_Flag={this.props.Change_Flag}
                                                                        id={el.id} name={el.name}
                                                                        followed={el.followed}/>) }
                </div>
                <div className={classes.block__lowerPage}>
                    <div className={classes.block__buttonPage}>
                        <div onClick={this.Show_More} className={`${classes.block__page_button} button`}>
                            Show more
                        </div>
                        <div onClick={this.Hide_Users} className={`${classes.block__page_button} button`}>
                            Hide users
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default FindFriends;