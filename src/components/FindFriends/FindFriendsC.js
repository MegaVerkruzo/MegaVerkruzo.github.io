import React from 'react';
import classes from './FindFriends.module.css';
import './../App.css';
import Human from "./Human/Human";
import axios from "axios";
import page from './scroll.module.css';
import FF from "./FF";
import Fetching from "../common/Fetching/Fetching";

class FindFriends extends React.Component {

    componentDidMount() {
        this.props.Is_Fetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.Is_Fetching(false);
                this.props.Show_More(response.data.items);
            });
    }

    Show_More = () => {
        this.props.Is_Fetching(true);
        this.Hide_Users();
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.Is_Fetching(false);
                this.props.Show_More(response.data.items);
            });
    };

    Hide_Users = () => {
        this.props.Hide_Users();
    };

    Change_Page = p => {
        this.props.Change_Page(p);
        this.props.Is_Fetching(true);
        this.Hide_Users();
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.Is_Fetching(false);
                this.props.Show_More(response.data.items);
            });
    }

    render() {
        return (
            <>

                <FF pageCount={this.props.pageCount} pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage} Change_Page={this.Change_Page}
                    showPeople={this.props.showPeople} Change_Flag={this.props.Change_Flag}
                    Show_More={this.Show_More} Hide_Users={this.Hide_Users}
                    isFetching={this.props.isFetching}/>
            </>
        )
    };
}

export default FindFriends;