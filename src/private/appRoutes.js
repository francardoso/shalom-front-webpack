import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {setIsLogged} from './actions/login';

import Login from './views/Login';
import Home from './views/Home';
import Stock from './views/Stock';
import NoMatch from './views/NoMatch';
import AddItem from './views/AddItem';
import ItemDetails from './views/ItemDetails';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3002/' : 'https://shalom-back.herokuapp.com/';

const mapDispatchToProps = dispatch =>({
    _setIsLogged: (loginData) => dispatch(setIsLogged(loginData))  
});

const mapStateToProps = state =>({
    isLogged: state.loginReducer.isLogged
});

class AppRoutes extends Component{
    componentWillMount(){
        this.checkLogged();
    }
    checkLogged(){
        fetch(`${API_URL}isLogged`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(response => response.json())
        .then(result =>{
            this.props._setIsLogged(result);
        });
    }
    render(){
        const isLogged = this.props.isLogged;
        if(isLogged == null){
            return <div></div>
        }
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute exact path="/home" isLogged={isLogged} component={Home}/>    
                    <PrivateRoute exact path="/stock" isLogged={isLogged} component={Stock}/>
                    <PrivateRoute exact path="/stock/addItem" isLogged={isLogged} component={AddItem}/>
                    <PrivateRoute exact path="/stock/:idItem" isLogged={isLogged} component={ItemDetails}/>
                    <Route component={NoMatch}/>          
                </Switch>
            </Router>
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        rest.isLogged
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

export default connect(mapStateToProps,mapDispatchToProps)(AppRoutes);