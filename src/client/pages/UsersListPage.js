import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id} className="collection-item"><i className="material-icons right green-text">phone</i><i className="material-icons right">trending_up</i><i className="material-icons right blue-text">edit</i>{user.name}</li>
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col m6">    
                    <div className="card blue-grey darken-1">
                        <div className="card-content">
                            <h1 className="title white-text">list of users:</h1>
                            <ul className="collection">{this.renderUsers()}</ul>
                        </div>
                        
                        <div className="card-action">
                            <a href="#">Delegate User</a>
                            <a href="#">Create New User</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};