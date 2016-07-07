/**
 * LeaguePedia | ChampionsListContainer.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import { connect } from 'react-redux';
import ChampionList from '../components/ChampionsList';

const mapStateToProps = (state) => {
  return {
    champions: state.champions,
    version: state.version
  }
};

export default connect(mapStateToProps)(ChampionList);
