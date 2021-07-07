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

  <div className={modeDark ? 'app dark' : 'app'}>
    <button className="modeJDR" onClick={() => {handleChangeModeJDR()}}>
    <i className="bi bi-dice-4-fill"></i><span>{modeJDR ? 'Basculer dans la sobriété' : 'Fan de Jeu de Rôle ?'}</span>
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

