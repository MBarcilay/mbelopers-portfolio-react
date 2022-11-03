import React from 'react'

import './Home.css'

import MBelopersLogo from '../../assets/MBeloper-logo sin fondo.png'

const Home = () => {
  return (
    <div className='home-div'>

        <main className='home-content'>

            <section className='logo-section'>
                <img src={MBelopersLogo} alt="MBeloper's Logo" />
            </section>

            <section className='resume-section'>
                <h1 className='mbelopers-title'>MBeloper</h1>
                <p className='info-p'>
                    Hola, mi nombre es Mario Barcilay, soy un desarrollador web mexicano y creador de contenido digital, en busca de seguir aprendiendo.
                    <br />
                    <br />
                    Aquí podrás encontrar información sobre mi, mis proyectos y mis conocimientos, así como contactar conmigo.
                </p>
            </section>

        </main>

    </div>
  )
}

export default Home