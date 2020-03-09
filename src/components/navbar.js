import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const NavbarItem = props => (
    <AniLink swipe direction='up' className="navbar-item" to={props.page} entryOffset={500}>
        {props.pagename}
    </AniLink>
)

const NavbarBurger = props => (
    <div
        onClick={props.toggleMenu}
        onKeyDown={props.toggleMenu}
        className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
        role='button'
        tabIndex='0'
    >
        <span />
        <span />
        <span />
    </div>
)

const NavBar = () => {
    const [view, setView] = useState(false)
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
            <div className={`navbar-menu is-transparent ${view ? 'is-active' : ''}`} >
                <div className="navbar-end">
                    <NavbarItem page='/' pagename='Home' />
                    <NavbarItem page="/projects/" pagename="Projects" />
                    <NavbarItem page="/about/" pagename="About" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;

