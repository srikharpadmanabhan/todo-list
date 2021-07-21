import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        React Web Applications
                        <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : "fas fa-bars"} />
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/todo-list' className='nav-links' onClick={closeMobileMenu}>
                            Todo List
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/recipe' className='nav-links' onClick={closeMobileMenu}>
                            Recipe
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/email' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Email
                        </Link>
                    </li>

                </ul>

            </nav>
        </>
    )
}

export default Navbar
