import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return (

        <Fragment>
        
        {items && items.map(e => <Item key={e.id} item={e}>)
            
        </Fragment>
    )
}

export default ItemList
