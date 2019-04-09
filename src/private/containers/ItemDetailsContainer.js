import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import { fetchItem, fetchItemDone, updateItem } from '../actions/item';

import ItemDetails from '../presentational/ItemDetails'

const mapStateToProps = state => ({
    item: state.itemReducer.item,
    loading: state.itemReducer.loading
});

const mapDispatchToProps = dispatch =>({
    _fetchItem: ()=>dispatch(fetchItem()),
    _fetchItemDone: (item)=>dispatch(fetchItemDone(item)),
    _updateItem: (item) => dispatch(updateItem(item))
});

class ItemDetailsContainer extends Component{
    constructor(){
        super();
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount(){
        this.fetchItem(this.props.idItem);
    }
    fetchItem(idItem){
        this.props._fetchItem();
        fetch('http://localhost:3002/getItem', {
            method: "POST",
            body:JSON.stringify({
                id: idItem
            }),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then(result =>{
            if(!result.err && result.item){
                this.props._fetchItemDone(result.item);
            }
        });
    }
    handleEdit(item){
        item.id = this.props.idItem;
        fetch('http://localhost:3002/editItem', {
            method: "PUT",
            body:JSON.stringify(item),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then(result =>{
            if(!result.err){
                this.props._updateItem(item);
            }
        });
    }
    handleDelete(){
        fetch('http://localhost:3002/deleteItem', {
            method: "POST",
            body:JSON.stringify({
                id: this.props.idItem
            }),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then(result =>{
            if(!result.err){
               this.props.history.push('/stock') 
            }
        });
    }
    render(){
        const {name, description, image_url, in_stock} = this.props.item;
        return(
            <React.Fragment>
                {
                    this.props.loading ? 
                    <div>...loading</div>
                    :
                    <ItemDetails
                        name={name}
                        description = {description}
                        image_url = {image_url}
                        in_stock = {in_stock}
                        handleEdit = {this.handleEdit}
                        handleDelete = {this.handleDelete}
                    />
                }
            </React.Fragment>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemDetailsContainer));