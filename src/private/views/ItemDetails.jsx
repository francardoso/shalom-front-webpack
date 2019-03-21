import React from 'react';

import LayoutContainer from '../containers/LayoutContainer';
import ItemDetailsContainer from '../containers/ItemDetailsContainer';
const ItemDetails = ({match: {params:{idItem} } }) =>{
    return(
        <LayoutContainer>
            <ItemDetailsContainer idItem={idItem}/>
        </LayoutContainer>
    )
}

export default ItemDetails;