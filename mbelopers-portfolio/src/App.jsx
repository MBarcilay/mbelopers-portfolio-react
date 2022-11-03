import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Nav from './components/Shared/Nav/Nav'
import Footer from './components/Shared/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Knowledge from './components/Knowledge/Knowledge'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
