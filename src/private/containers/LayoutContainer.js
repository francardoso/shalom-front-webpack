import React, {Component} from 'react';
import Header from '../presentational/Header';

class LayoutContainer extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
};

export default LayoutContainer;