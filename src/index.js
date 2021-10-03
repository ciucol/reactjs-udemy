import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Counter from './views/Counter';
import GifExpertApp from './views/GifExpertApp';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
    {/* <Counter /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
