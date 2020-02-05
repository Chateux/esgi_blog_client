import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SecurityContainer from "./containers/SecurityContainer";
import Home from "./containers/Index";
import { fetchUser } from "../redux/actions/user";
import {connect} from "react-redux";
import {applyMiddleware as dispatch} from "redux";

class App extends React.Component {
	
	constructor(props) {
        super(props);

        this.props.getUser();
    }


  render(){
    /*Un <Switch> regarde à travers ses enfants <Route>s et
            rend le premier qui correspond à l'URL actuelle.*/
    const { user } = this.props;
    return (

    <div>
      <header className="App-header">
    	
          Hello ESGI {user.email}
           <BrowserRouter>
                        <>  
                        	 <Link to="/">Accueil</Link>
                            <Link to="/login">Login</Link>
                            <Switch>
                                <Route path="/login" component={SecurityContainer}/>
                                <Route path="/" exact component={Home}/>
                            </Switch>
                        </>
                    </BrowserRouter>
       
      </header>
    </div>
  );


  }

  
}

const mapStateToProps = (state) => {
    const { user: { user } } = state;

    return {
        user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(fetchUser(dispatch)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
