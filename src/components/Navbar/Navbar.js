import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Filip Norström</h1>
                <div className="menu-icon">
                    
                </div>
                <ul className="Nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}             
                </ul>
            </nav>
        )
    }
}

export default Navbar