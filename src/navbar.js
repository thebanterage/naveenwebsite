import React from 'react'
import navbar from './navbar.css'
import HamburgerToggle from '../src/hamburger/'
const NavBar = () =>{

    return(
        <header className='navbar'>
        <nav className='navbarnav'>
            <div></div>
            <div className='navbarlogo'><a href="">Naveen Bandarage</a></div>
            <div className='spacing'></div>
            <div className="navitems">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Resume</a></li>

                </ul>
            </div>
        </nav>
        </header>
    );
}
export default NavBar