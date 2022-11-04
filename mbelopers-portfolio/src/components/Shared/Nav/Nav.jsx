import React, { useEffect, useState } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import './Nav.css'

import MBelopersLogo from '../../../assets/MBeloper-logo sin fondo.png'

const Nav = () => {

    const [isHomePage, setIsHomePage] = useState(true)
    const {pathname} = useLocation()

  return (
    <div className='menu-div'>
        <nav className='menu'>

            <section className='logo-menu-section'>
                <NavLink className='nav-link' to="/">
                    <img src={MBelopersLogo} alt="MBeloper's Logo" />
                </NavLink>
            </section>

            <section className='content-menu-section'>
                <ul className='menu-ul'>
                    <NavLink activeClassName="active" className={({isActive}) => (isActive ? "menu-ul-active": "menu-ul")} to="/">
                        <li className='menu-item'>Home</li>
                    </NavLink>
                    
                    <NavLink activeClassName="active" className={({isActive}) => (isActive ? "menu-ul-active": "menu-ul")} to="about">
                        <li className='menu-item'>Sobre mí</li>
                    </NavLink>
                    
                    <NavLink activeClassName="active" className={({isActive}) => (isActive ? "menu-ul-active": "menu-ul")} to="knowledge">
                    <li className='menu-item'>Conocimientos</li>
                    </NavLink>

                    <NavLink activeClassName="active" className={({isActive}) => (isActive ? "menu-ul-active": "menu-ul")} to="projects">
                        <li className='menu-item'>Proyectos</li>
                    </NavLink>
                    
                    <NavLink activeClassName="active" className={({isActive}) => (isActive ? "menu-ul-active": "menu-ul")} to="contact">
                        <li className='menu-item'>Contacto</li>
                    </NavLink>
                </ul>
            </section>

        </nav>
    </div>
  )
}

export default Nav