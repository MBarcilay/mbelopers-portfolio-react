import React, { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import './Nav.css'

import MBelopersLogo from '../../../assets/MBeloper-logo sin fondo.png'

const Nav = () => {

    const [isHomePage, setIsHomePage] = useState(true)
    const {pathname} = useLocation()

  return (
    <div className='menu-div'>
        <nav className='menu'>

            <section className='logo-menu-section'>
                <Link className='nav-link' to="/">
                    <img src={MBelopersLogo} alt="MBeloper's Logo" />
                </Link>
            </section>

            <section className='content-menu-section'>
                <ul className='menu-ul'>
                    <Link className='nav-link' to="/">
                        <li className='menu-item'>Home</li>
                    </Link>
                    
                    <Link className='nav-link' to="about">
                        <li className='menu-item'>Sobre mí</li>
                    </Link>
                    
                    <Link className='nav-link' to="knowledge">
                    <li className='menu-item'>Conocimientos</li>
                    </Link>

                    <Link className='nav-link' to="projects">
                        <li className='menu-item'>Proyectos</li>
                    </Link>
                    
                    <Link className='nav-link' to="contact">
                        <li className='menu-item'>Contacto</li>
                    </Link>
                </ul>
            </section>

        </nav>
    </div>
  )
}

export default Nav