/**
 * LeaguePedia | ChampionDetailsContainer.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import { connect } from 'react-redux';
import ChampionDetails from '../components/ChampionDetails';

const mapStateToProps = (state) => {
  return {
    champion: state.champion,
    version: state.version
  }
};

export default connect(mapStateToProps)(ChampionDetails);
