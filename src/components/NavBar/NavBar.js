import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems";
import { CartWidget} from "./CartWidget";
import './NavBar.css'

class NavBar extends Component {
    state = {clicked: false}
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Toto's Burgers<i className="fas fa-hamburger"></i></h1>
                <h3 className="navbar-logo">Cart<i className="fas fa-shopping-cart"></i></h3>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
               <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item, index)=> {
                           return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}    
                            </a>
                            </li>      
                           ) 
                        })
                    }  
               </ul>
               <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default NavBar