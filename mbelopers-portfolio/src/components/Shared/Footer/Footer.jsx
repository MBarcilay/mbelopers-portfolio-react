import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-div'>

        <footer className='footer'>
            
            <section className='socialMedia-section'>
                
                <div className='social-div'>
                    <a href="" target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                    <img src="" alt="Facebook Logo" />
                </div>

                <div className='social-div'>
                    <a href="" target="_blank" rel="noreferrer">
                        Instagram
                    </a>
                    <img src="" alt="Instagram Logo" />
                </div>

                <div className='social-div'>
                    <a href="" target="_blank" rel="noreferrer">
                        Youtube
                    </a>
                    <img src="" alt="Youtube Logo" />
                </div>

                <div className='social-div'>
                    <a href="" target="_blank" rel="noreferrer">
                        Arc
                    </a>
                    <img src="" alt="Arc Logo" />
                </div>

                <div className='social-div'>
                    <a href="" target="_blank" rel="noreferrer">
                        Github
                    </a>
                    <img src="" alt="Github Logo" />
                </div>

                <div className='social-div'>
                    <a href="" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <img src="" alt="LinkedIn Logo" />
                </div>

            </section>

            <section className='copyright-section'>
                <p>
                    &copy; 2022 MBeloper
                </p>
            </section>

        </footer>

    </div>
  )
}

export default Footer