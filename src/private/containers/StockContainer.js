import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchItems, fetchItemsDone} from '../actions/items';

import ItemCard from '../presentational/ItemCard';

const mapStateToProps = state =>({
    items: state.itemsReducer.items,
    loading: state.itemsReducer.loading,
});

const mapDispatchToProps = dispatch =>({
    _fetchItems: () => dispatch(fetchItems()),
    _fetchItemsDone: (items) => dispatch(fetchItemsDone(items)),
})

class StockContainer extends Component{
    componentDidMount(){
        this.getAllItems();
    }
    getAllItems(){
        this.props._fetchItems();
        fetch('http://localhost:3002/getAllItems', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then(result =>{
            this.props._fetchItemsDone(result.items || []);
        });
    }
    render(){
       const items = this.props.items;
        return(
            <React.Fragment>
                <div className="row">
                    <Link to={'/stock/addItem'} className='btn btn-outline-primary' id='addNewItem'>Adicionar novo produto</Link>
                </div>
                <div className="card-columns">
                    {
                        items.map(item=>{
                            return <ItemCard 
                                    key={item._id}
                                    item={item}
                                />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockContainer);