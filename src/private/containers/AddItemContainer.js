import React,{Component} from 'react';

import AddItemForm from '../presentational/AddItemForm';

class AddItemContainer extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(product){
        fetch('http://localhost:3002/addItem', {
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