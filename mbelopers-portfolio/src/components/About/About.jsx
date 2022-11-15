import React from 'react'

import './About.css'

import MariosPortrait from '../../assets/MariosPortrait.png'

const About = () => {
  return (
    <div className='about-div'>

      <main className='about-content'>

        <section className='portrait-section'>
          <img src={MariosPortrait} alt="Mario's portrait" />
        </section>

        <section className='about-info-section'>
          <p className='about-info-p'>
            Hola, mi nombre es Mario Barcilay Jiménez Acevedo, soy un desarrollador de software mexicano, dedicado principalmente al <b>desarrollo web</b>, además de la creación de contenido educativo digital acerca de programación.
            <br />
            <br />
            Soy una persona entusiasta con habilidad de liderazgo con hambre de conocimiento y toda la disposición para aprender cosas nuevas.
            <br />
            <br />
            Tengo un título de <i>Técnico Superior Universitario</i> en <b>Desarrollo de SOftware Multiplataforma</b> y otro en curso en una <i>Ingeniería</i> en <b>Desarrollo y Gestión de Software</b>.
            <br />
            <br />
            Además, soy consumidor y creador de obras artísticas como dibujo, pintura y escultura.
            <br />
            <br />
            Si quieres ver un poco más acerca de mi trabajo, puedes visitar mis redes sociales o contactarme directamente a través del formulario en la sección de contacto.
            <br />
            <br />
          </p>
        </section>

      </main>

    </div>
  )
}

export default About