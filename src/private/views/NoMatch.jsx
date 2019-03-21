import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NoMatch extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-4">Página não encontrada</h1>
                <p className="lead">Desculpe, essa página não existe.</p>
                <hr className="my-4"/>
                <p>Tente voltar para a página inicial.</p>
                <Link to={'/home'} className='btn btn-primary btn-lg'>Início</Link>
            </div>
        )
    }
};

export default NoMatch;