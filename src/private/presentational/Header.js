import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(){
        super();

        this.navBarCollapse = React.createRef();

        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(event){
        event.preventDefault();
        const navBar = this.navBarCollapse.current;
        navBar.classList.toggle('show');
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link className="navbar-brand" to={'/home'}>Shalom</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={this.toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={this.navBarCollapse}>
                    <ul className="navbar-nav" ref>
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/stock'}>Estoque</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Header;