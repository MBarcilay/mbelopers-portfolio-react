import React from 'react'

import './Knowledge.css'

const Knowledge = () => {
  return (
    <div className='knowledge-div'>
      
      <main className='knowledge-content'>

        <section className='knowledge-info-section'>
          <p className='knowledge-info-p'>
            Poseo varias certiificaciones en tecnologías de desarrollo web, de escritorio y móvil, aunque mi especialidad es el desarrollo web.
            <br />
            <br />
            Además, tengo distintas certificaciones en tecnologías del área, estas las puedes revisar escaneando el siguiente código QR.
          </p>
        </section>

        <section className='QR-section'>
          <img src="" alt="Código QR de mi portafolio" />
        </section>

        <section className='technologies-section'>

          <div className='technologies-item'>

            <h3 className='technology-name'></h3>

            <img src="" alt="HTML 5 Logo" />

          </div>

          <div className='technologies-item'>

            <h3 className='technology-name'></h3>

            <img src="" alt="CSS 3 Logo" />

          </div>

          <div className='technologies-item'>

            <h3 className='technology-name'></h3>

            <img src="" alt="JavaScript ES9 Logo" />

          </div>

          <div className='technologies-item'>

            <h3 className='technology-name'></h3>

            <img src="" alt="Python Logo"/>

          </div>

          <div className='technologies-item'>

            <h3 className='technology-name'></h3>

            <img src="" alt="MySQL Logo" />

          </div>

          <div className='technologies-item'>

            <h3 className='technology-name'></h3>

            <img src="" alt="Mongo DB Logo" />

          </div>

          <div className='technologies-item'>

            <h3 className='technology-name'></h3>

            <img src="" alt="Pandas Logo" />

          </div>

        </section>

        <section className='cv-section'>

        </section>

      </main>

    </div>
  )
}

export default Knowledge