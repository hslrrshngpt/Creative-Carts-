import React from 'react';
import './App.css';
import {Footer, Navbar} from './components'
import { About, Home, Info, Products } from './containers'
import ParticleBackground from './components/particles/ParticleBackground';

const App = () => {
  return(
    <div className='App'>
      <div className='particles'><ParticleBackground/></div>
      <div className='static'><Navbar/></div>
      <Home />
      <Products />
      <Info />
      <About />
      <Footer/>
    </div>
  )
}

export default App;