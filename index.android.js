/**
 * LeaguePedia | index.android.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

// TODO: Standardize Android and iOS entry points.
import React, { AppRegistry, Component } from 'react-native';
import ChampionsList from './app/components/ChampionsList';
import champions from './app/reducers/champions';
import { createStore } from 'redux';
import { RiotAPI } from './app/api'
import { Provider } from 'react-redux';

const store = createStore(champions);

class LeaguePedia extends Component {
  render() {
    RiotAPI.getAllChamps(store);

    return (
      <Provider store={store}>
        <ChampionsList />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('LeaguePedia', () => LeaguePedia);
