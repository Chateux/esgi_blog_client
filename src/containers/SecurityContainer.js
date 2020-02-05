import React from "react";
import {Route, Switch} from 'react-router-dom';
import LoginForm from './LoginForm';
import {connect} from "react-redux";
import {login} from "../redux/actions/security";

class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        this.props.login(data.email, data.password);

    };
   
    render() {
        return (
             
             <LoginForm onSubmit={this.handleSubmit}/>
               
            
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password, dispatch))
    }
};

export default connect(undefined, mapDispatchToProps)(SecurityContainer);
