import React, {Component} from 'react';

import LoginContainer from '../containers/LoginContainer';

class Login extends Component{
    render(){
        return (
            <LoginContainer history={this.props.history}/>
            // <h1>ae</h1>
        )
    }
};

export default Login;