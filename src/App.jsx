import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
import BarraNavegacion from './components/BarraNavegacion';
import { ElementosNavbar } from './data/ElementosNavbar';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';

export default function App() {
  return (
    <Router>
      <BarraNavegacion />
      <h1>Desarrollo de Interfaces: Examen React.js </h1>
      <p>
        Resuelve los ejercicios propuestos en los distintos apartados de la
        barra de navegación. Para ello, haz un fork de este repositorio desde tu
        cuenta de Github y súbelo a la tarea de examen. El repositorio debe
        tener el nombre examen-react-Nombre-Apellido1, donde nombre y apellido
        son los tuyos.
      </p>
      {ElementosNavbar.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
      
    </Router>
  );
}