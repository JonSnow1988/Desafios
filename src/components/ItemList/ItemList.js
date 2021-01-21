
import React, { Fragment } from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return (
        <Fragment>  
            <div>
        
        {items && items.map(e => <Item key={e.id} item={e}/>)}
            
        </div>
    )
    </Fragment>
      
    )
    }
export default ItemList;
