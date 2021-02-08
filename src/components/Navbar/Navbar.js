import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

import './Navbar.css'

class Navbar extends Component {

    render() {
        return(
         <nav className="NavbarItems">
             <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className='Home'>Filip Norström</h1>
             </Link>
             <ul className="Nav-menu"> 
                <Link to='/About' style={{ textDecoration: 'none' }}>
                    <li className="li-list">About</li>
                </Link>
                <Link to='/Contact' style={{ textDecoration: 'none' }}>
                    <li className="li-list">Contact</li>
                </Link>
             </ul>
         </nav>
        )
    }
}

export default Navbar