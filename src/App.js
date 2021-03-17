import React from 'react';
import './App.css';
import tachibana from './bio.png'

function App() {
  return (
    <div className="App">

      <img alt="bio" src={tachibana}/>

      <div className="header">
        Mask Up, Pair Up, Press Play.
      </div>

      <div className='jj'>
      <audio id="play" xmlns="http://www.w3.org/1999/xhtml" controls="controls" preload="none">
        <source src="http://jj.gboards.ca/canyounot.ogg" type="application/ogg" /></audio>
      </div>
    </div>
  );
}

export default App;
