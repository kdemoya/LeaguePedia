/**
 * LeaguePedia | index.android.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

// TODO: Standardize Android and iOS entry points.
import React, { AppRegistry, Component } from 'react-native';
import ChampionsList from './app/components/ChampionsList';

class LeaguePedia extends Component {
  render() {
    return (
      <ChampionsList />
    );
  }
}

AppRegistry.registerComponent('LeaguePedia', () => LeaguePedia);
