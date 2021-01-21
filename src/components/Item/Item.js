import React from 'react'

const Item = ({Item}) => {
    return (
        <div>
            {Item.title} {Item.description}
        </div>
    )
}

export default Item
