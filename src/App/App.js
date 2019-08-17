import React, { Fragment } from 'react';
import logo from './images/logo.png';
import acompanhe from './images/acompanhe.png';
import instagram from './images/instagram.png'
import behance from './images/behance.png';
import facebook from './images/facebook.png'
import linkedin from './images/linkedin.png';
import './App.css';

const App = () => (
  <Fragment>
    <div className='container'>
      <span className='logo'>
        <img src={logo} alt='' />
      </span>
    </div>
    <div className='links'>
      <div className='block'>
        <span className='acompanhe'>
          <img src={acompanhe} alt='' />
        </span>
      </div>
      <div className='block'>
        <a href='https://instagram.com/brunamdeiros/' target='_blank' rel="noopener noreferrer">
          <img src={instagram} alt='' />
        </a>
        <a href='https://www.behance.net/brunamdeir6861' target='_blannk' rel="noopener noreferrer">
          <img src={behance} alt='' />
        </a>
        <a href='https://www.facebook.com/Bruna-Medeiros-165840490432675/' target='_blank' rel="noopener noreferrer">
          <img src={facebook} alt='' />
        </a>
        <a href='https://www.linkedin.com/in/brunamedeiross/' target='_blank' rel="noopener noreferrer">
          <img src={linkedin} alt='' />
        </a>
      </div>
    </div>
    <div className='copyright'>
      <span>© 2015 BRUNAMEDEIROS</span>
    </div>
  </Fragment>
);

export default App;
