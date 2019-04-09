import React,{Component} from 'react';

import AddItemForm from '../presentational/AddItemForm';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3002/' : 'https://shalom-back.herokuapp.com/';

class AddItemContainer extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(product){
        fetch(`${API_URL}addItem`, {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(result =>{
            this.props.history.push('/stock');
        });
    }
    render(){
        return(
            <AddItemForm handleSubmit={this.handleSubmit}/>
        )
    }
}

export default AddItemContainer;