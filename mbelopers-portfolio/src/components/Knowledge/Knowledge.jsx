import React from 'react'

import QR_Code from '../../assets/Certifications_QR.png'
import GithubLogo from '../../assets/github.png'
import HTML_Logo from '../../assets/html-5.png'
import CSS_Logo from '../../assets/css-3.png'
import ReactLogo from '../../assets/React-icon.svg.png'
import JavaScriptLogo from '../../assets/javascript-logo.png'
import NodeJS_Logo from '../../assets/nodejs-logo.png'
import FlutterLogo from '../../assets/flutter-logo.png'

import './Knowledge.css'

const Knowledge = () => {
  return (
    <div className='knowledge-div'>
      
      <main className='knowledge-content'>

        <section className='knowledge-info-section'>
          <p className='knowledge-info-p'>
            Poseo varias <b>certiificaciones</b> en tecnologías de desarrollo web, de escritorio y móvil, aunque mi especialidad es el <b>desarrollo web</b>.
            <br />
            <br />
            Además, tengo distintas certificaciones en tecnologías del área, estas las puedes revisar escaneando el siguiente <b>código QR</b>.
          </p>
        </section>

        <section className='QR-section'>
          <img src={QR_Code} alt="Código QR de mi portafolio" />
        </section>

        <section className='technologies-info-section'>
          <p className='technologies-info-p'>
              Estas son algunas de las tecnologías con las que tengo experiencia trabaajando.
          </p>
        </section>

        <section className='technologies-section'>


          <div className='technologies-item'>

            <h3 className='technology-name'>HTML 5</h3>

            <img src={HTML_Logo} alt="HTML Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>CSS 3</h3>

            <img src={CSS_Logo} alt="CSS Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>JavaScript ES9</h3>

            <img src={JavaScriptLogo} alt="JavaScript Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>React</h3>

            <img src={ReactLogo} alt="React Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>Node JS</h3>

            <img src={NodeJS_Logo} alt="Node JS Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>Flutter</h3>

            <img src={FlutterLogo} alt="Flutter Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>C#</h3>

            <img src="" alt="C# Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>Python</h3>

            <img src="" alt="Python Logo"/>

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>MySQL</h3>

            <img src="" alt="MySQL Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>Mongo DB</h3>

            <img src="" alt="Mongo DB Logo" />

          </div>


          <div className='technologies-item'>

            <h3 className='technology-name'>Pandas</h3>

            <img src="" alt="Pandas Logo" />

          </div>

          <div className='technologies-item'>

            <h3 className='technology-name'>GitHub</h3>

            <img src={GithubLogo} alt="Github Logo" />

          </div>

        </section>

        <section className='cv-section'>
          <p className='cv-info-p'>
            Aquí puedes revisar mi CV.
          </p>
        </section>

      </main>

    </div>
  )
}

export default Knowledge