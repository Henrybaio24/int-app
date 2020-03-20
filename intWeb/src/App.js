import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from './components/Crear';
import Lista from './components/Lista';
import Registrarse from './components/Registrarse'

function App() {
  return (
    <div >
      <Router>

        <Route path='/' exact component={Crear} />
        <Route path='/crear' component={Crear} />
        <Route path='/lista' component={Lista} />
        <Route path='/registrarse' component={Registrarse} />
      </Router>


    </div>
  );
}

export default App;
