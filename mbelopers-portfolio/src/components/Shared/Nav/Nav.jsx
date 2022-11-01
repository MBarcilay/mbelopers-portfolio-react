import React, { useEffect, useState } from 'react'

import './Nav.css'

import MBelopersLogo from '../../../assets/MBeloper-logo sin fondo.png'

const Nav = () => {
  return (
    <div className='menu-div'>
        <nav className='menu'>

            <section className='logo-menu-section'>
                <img src={MBelopersLogo} alt="MBeloper's Logo" />
            </section>

            <section className='content-menu-section'>
                <ul className='menu-ul'>
                    <li className='menu-item'>Inicio</li>
                    <li className='menu-item'>Sobre mí</li>
                    <li className='menu-item'>Conocimientos</li>
                    <li className='menu-item'>Proyectos</li>
                    <li className='menu-item'>Contacto</li>
                </ul>
            </section>

        </nav>
    </div>
  )
}

export default Nav