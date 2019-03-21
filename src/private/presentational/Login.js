import React, {Component} from 'react';
import logo from '../../assets/images/logo.png'
class Login extends Component{
    constructor(){
        super();
        this.state = {
            login: '', 
            password: '' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleChange(event){
        const el = event.target;
        const input = el.id;

        switch (input){
            case 'login':
                this.setState({
                    ...this.state,
                    login: el.value
                });
                break;
            case 'password':
                this.setState({
                    ...this.state,
                    password: el.value
                });
                break;
            default:
                return;
        }
    };
    handleKeyDown(event){
        if(event.keyCode === 13){
            this.handleSubmit(event);
        }
    };
    handleSubmit(event){
        event.preventDefault();
        const credentials = this.state;
        this.props.loginAttempt(credentials);
    };
    render(){
        return(
            <React.Fragment>
                <img src={logo} alt="Shalom Logo" id="logo"/>
                <div id="loginContainer">
                    <h2>Olá! Faça seu login</h2>
                    <input 
                        id="login" 
                        name="login" 
                        placeholder="email" 
                        className="form-control" 
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    /> 
                    <input 
                        id="password" 
                        name="password" 
                        placeholder="senha" 
                        type="password" 
                        className="form-control" 
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Acessar</button>
                    {
                        this.props.loginError &&
                        <div className="alert alert-danger" role="alert">
                            Erro ao entrar
                        </div>
                    }
                </div>
            </React.Fragment>
        )

    }
}

export default Login;