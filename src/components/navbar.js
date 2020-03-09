import React, { useState, useContext } from 'react'
import useDarkMode from 'use-dark-mode'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {FaMoon, FaRegMoon } from 'react-icons/fa'

const NavbarItem = props => (
    <AniLink swipe direction='left' className="navbar-item" to={props.page}>
        {props.pagename}
    </AniLink>
)

const NavbarBurger = props => (
    <div
        onClick={props.toggleMenu}
        className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
    >
        <span />
        <span />
        <span />
    </div>
)

const NavBar = () => {
    const [view, setView] = useState(false)
    const darkMode = useDarkMode(false)
    const toggleMenu = () => setView(!view)

    return (
        <div className="container">
            <div className="navbar-brand">
                <div className='navbar-item'>
                    Won S Kim
                </div>
                <NavbarBurger
                    active={view}
                    toggleMenu={toggleMenu}
                />
            </div>
            <div className={`navbar-menu ${view ? 'is-active' : ''}`} >
                <div className="navbar-end">
                    <NavbarItem page='/' pagename='Home' />
                    <NavbarItem page="/projects/" pagename="Projects" />
                    <NavbarItem page="/about/" pagename="About" />
                    <span className='navbar-item' id='dark-toggle' onClick={darkMode.toggle}>
                        <span className='icon'>
                            {darkMode.value ? <FaRegMoon /> : <FaMoon />}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

