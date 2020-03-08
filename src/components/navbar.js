import React, { useState, useContext } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import logo from '../images/gatsby-icon.png'
import {FaMoon, FaRegMoon } from 'react-icons/fa'
import ThemeContext from './theme-context'

const NavbarItem = props => (
    <AniLink swipe direction='left' className="navbar-item is-capitalized has-text-dark" to={props.page}>
        {props.pagename}
    </AniLink>
)

const NavbarBurger = props => (
    <div
        onClick={props.toggleMenu}
        className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
    >
        <span className='has-text-dark'/>
        <span className='has-text-dark'/>
        <span className='has-text-dark'/>
    </div>
)

const NavBar = () => {
    const { darkMode, toggleMode } = useContext(ThemeContext)
    const [view, setView] = useState(false)

    const toggleMenu = () => setView(!view)

    return (
        <div className='hero-head'>
            <nav className={`navbar is-fixed-top has-shadow ${darkMode ? 'is-dark' : 'is-primary'}`}>
                <div className="container">
                    <div className="navbar-brand">
                        <AniLink className="navbar-item" to="/">
                            <img src={logo} alt="logo" />
                        </AniLink>
                        <NavbarBurger
                            active={view}
                            toggleMenu={toggleMenu}
                        />
                    </div>
                    <div className={`navbar-menu ${view ? 'is-active' : ''}`} >
                        <div className="navbar-end">
                            <NavbarItem page="/projects/" pagename="Projects" />
                            <NavbarItem page="/about/" pagename="About" />
                            <div className='navbar-item is-primary has-text-dark' onClick={() => toggleMode()}>
                                <span className='icon'>
                                    {darkMode ? <FaRegMoon /> : <FaMoon />}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

