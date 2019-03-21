import React from 'react';
import imgPlaceHolderURL from '../../assets/images/image-placeholder.png';

const ItemDetails = (props) =>{
    const {name, description, image_url, in_stock} = props;
    
    return (
        <div className="card mb-3 item-details-card">
            <img src={image_url ? image_url : imgPlaceHolderURL} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">No estoque: {in_stock}</small></p>
            </div>
        </div>
    )
};

export default ItemDetails;