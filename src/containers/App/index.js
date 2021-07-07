import { connect } from 'react-redux';
import {changeMode, changeModeDark} from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  modeJDR : state.modeJDR,
  modeDark: state.modeDark,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChangeModeJDR: () => {
    dispatch(changeMode())
  },
  handleChangeModeDark: () => {
    dispatch(changeModeDark())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
