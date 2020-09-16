import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css'

import Header from './components/header/Header'
import Form from './components/form/Form'
import Grid from './components/grid/Grid'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='form'>
        <Form />
      </div>
      <div className='grid'>
        <Grid />
      </div>
    </div>
  );
}

export default App;
