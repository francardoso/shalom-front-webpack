import React from 'react';
import {Link} from 'react-router-dom';

const ItemCard = (props) => {
    const {_id, name, description} = props.item;
    return(
        <div className="card" style={{"width":"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/stock/${_id}`} className="btn btn-info">Detalhes</Link>
            </div>
        </div>
    )
};

export default ItemCard;