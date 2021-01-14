import React, { Component } from 'react';
import './CartWidget.css'


class CartWidget extends Component {
    state = {clicked: false}
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {
        return(
            <nav className="CartWidget">
                <h3 className="navbar-logo">Cart<i className="fas fa-shopping-cart"></i></h3>
            
            </nav>
        )
    }
}

export default CartWidget