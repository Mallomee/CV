import React from 'react';
import PropTypes from 'prop-types';
//components
import CV from 'src/components/CV';
import JDR from 'src/components/JDR';

//Style
import './app.scss';

const App = ({modeJDR,
              modeDark,
              handleChangeModeJDR,
              handleChangeModeDark 
            }) => (

  <div className="app">
    <button className="modeJDR" onClick={() => {handleChangeModeJDR()}}>
      {modeJDR ? 'Retournons à plus simple' : 'Fan de Jeu de Rôle ?'}
    </button>
    <button className="modeDark" onClick={() => {handleChangeModeDark()}}>
      {modeDark ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
    </button>
    {!modeJDR && <CV/>}
    {modeJDR && <JDR/>}
  </div>

);

App.propTypes = {
  modeJDR: PropTypes.bool.isRequired,
  modeDark: PropTypes.bool.isRequired,
  handleChangeModeJDR: PropTypes.func.isRequired,
  handleChangeModeDark: PropTypes.func.isRequired,
}


export default App;

