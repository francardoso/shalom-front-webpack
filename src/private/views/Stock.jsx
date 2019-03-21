import React, {Component} from 'react';

import LayoutContainer from '../containers/LayoutContainer';
import StockContainer from '../containers/StockContainer';

class Stock extends Component{
    render(){
        return(
            <LayoutContainer>
                <StockContainer/>
            </LayoutContainer>
        )
    }
};

export default Stock;