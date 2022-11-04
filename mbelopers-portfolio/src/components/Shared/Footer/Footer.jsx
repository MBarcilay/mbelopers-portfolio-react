import React from 'react'

import './Footer.css'

import FacebookLogo from '../../../assets/facebook.png'
import InstagramLogo from '../../../assets/instagram.png'
import YoutubeLogo from '../../../assets/youtube.png'
import GithubLogo from '../../../assets/github.png'
import LinkedInLogo from '../../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='footer-div'>

        <footer className='footer'>
            
            <section className='socialMedia-section'>
                
                <div className='social-div'>
                    <a href="https://www.facebook.com/people/MBeloper/100086310920603/" target="_blank" rel="noreferrer">
                        Facebook
                        <img src={FacebookLogo} alt="Facebook Logo" />
                    </a>
                </div>

                <div className='social-div'>
                    <a href="https://instagram.com/mbeloper?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        Instagram
                        <img src={InstagramLogo} alt="Instagram Logo" />
                    </a>
                </div>

                <div className='social-div'>
                    <a href="https://youtube.com/channel/UCPviW_HPxZdimcavqjAQgVg" target="_blank" rel="noreferrer">
                        Youtube
                        <img src={YoutubeLogo} alt="Youtube Logo" />
                    </a>
                </div>

                <div className='social-div'>
                    <a href="https://github.com/MBarcilay" target="_blank" rel="noreferrer">
                        Github
                        <img src={GithubLogo} alt="Github Logo" />
                    </a>
                </div>

                <div className='social-div'>
                    <a href="https://www.linkedin.com/in/mario-barcilay-jim%C3%A9nez-acevedo-b65710252" target="_blank" rel="noreferrer">
                        LinkedIn
                        <img src={LinkedInLogo} alt="LinkedIn Logo" />
                    </a>
                </div>

            </section>

            <section className='copyright-section'>
                <p>
                    &copy; 2022 MBeloper
                </p>
                <p>
                    Por ahora no está disponible para dispositivos móviles.
                </p>
            </section>

        </footer>

    </div>
  )
}

export default Footer