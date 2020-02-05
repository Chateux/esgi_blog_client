import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SecurityContainer from "./containers/SecurityContainer";
import Home from "./containers/Index";
import { fetchUser } from "../redux/actions/user";
import {connect} from "react-redux";
import {applyMiddleware as dispatch} from "redux";

class App extends React.Component {
	

  render(){
    /*Un <Switch> regarde à travers ses enfants <Route>s et
            rend le premier qui correspond à l'URL actuelle.*/
   
    return (

    <div>
      <header className="App-header">
    	
          Hello ESGI 
           <BrowserRouter>
                        <>  
                        	 <Link to="/">Accueil</Link>
                            <Link to="/login">Login</Link>
                            <Switch>
                                <Route path="/login" component={SecurityContainer}/>
                                <Route path="/" exact/>
                            </Switch>
                        </>
                    </BrowserRouter>
       
      </header>
    </div>
  );


  }

  
}

export default App;
