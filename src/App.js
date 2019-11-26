import React from 'react';
import './App.css';
import tachibana from './bg.jpg'

function App() {
  return (
    <div className="App">
      <div className="header">
        [ <a href="http://lain.gboards.ca/pub/music">Files</a> |
        <a href="mailto:bernhardtjeremy@gmail.com">Become a DJ!</a> |
        <a href="http://gboards.ca/">Feed Me.</a> ]
      </div>
      <img alt="tachibani Inc logo" src={tachibana}/>
      <div className='jj'>
      <audio xmlns="http://www.w3.org/1999/xhtml" controls="controls" preload="none">
        <source src="http://jj.gboards.ca/cyberia.ogg" type="application/ogg" /></audio>
      </div>
    </div>
  );
}

export default App;
