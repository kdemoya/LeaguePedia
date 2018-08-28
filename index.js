/**
 * LeaguePedia | index.android.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

// TODO: Standardize Android and iOS entry points.
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import ChampionsListContainer from './app/containers/ChampionsListContainer';
import ChampionDetailsContainer from './app/containers/ChampionDetailsContainer';
import champions from './app/reducers/champions';
import { createStore } from 'redux';
import { RiotAPI } from './app/api'
import { Provider, connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

const store = createStore(champions);
const ReduxedRouter = connect()(Router);

class LeaguePedia extends Component {
  render() {
    RiotAPI.getAllChamps(store);

    return (
      <Provider store={store}>
        <ReduxedRouter>
          <Scene key="root">
            <Scene key="list" hideNavBar={true} initial={true} component={ChampionsListContainer} renderTitle={false} title="Champions List" />
            <Scene key="details">
              <Scene key="overview" hideNavBar={true} initial={true} component={ChampionDetailsContainer} title="Champion Overview" />
            </Scene>
          </Scene>
        </ReduxedRouter>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('LeaguePedia', () => LeaguePedia);
