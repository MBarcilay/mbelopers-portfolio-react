import React from 'react'

import './Contact.css'

import emailjs from "@emailjs/browser";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j031b26', 'template_zgql86v', e.target, 'NQAC-y-w4hI58FEPO')
      .then((response) => 
          console.log(response))
          e.target.reset()
      .catch((error) => 
          console.log(error))
      };

  return (
    <div className='contact-div'>
      <main className='contact-content'>
        <fieldset>
          <legend>Comunícate con MBeloper</legend>
          <form id='contact-form' onSubmit={sendEmail}>

            <div className='form-div'>
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" placeholder='Nombre' autoFocus='True' required/>
            </div>

            <div className='form-div'>
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" name="email" id="email" placeholder='Correo electrónico' required/>
            </div>

            <div className='form-div'>
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensaje' required></textarea>
            </div>

            <div className='btn-div'>
              <button type="submit">Enviar</button>
            </div>

          </form>
        </fieldset>
      </main>
    </div>
  )
}

export default Contact