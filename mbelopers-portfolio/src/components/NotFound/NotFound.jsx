import React from 'react'

import './NotFound.css'

import MBelopersLogo from '../../assets/MBeloper-logo sin fondo.png'

const NotFound = () => {
  return (
    <div className='notfound-div'>
        <img src={MBelopersLogo} alt="MBeloper's logo" />
        <h1>ERROR 404</h1>
        <h3>Esta página no existe</h3>
    </div>
  )
}

export default NotFound