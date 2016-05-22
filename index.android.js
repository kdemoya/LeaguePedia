/**
 * LeaguePedia | index.android.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

// TODO: Standardize Android and iOS entry points.
import React, { View, AppRegistry, Component } from 'react-native';
import ChampionsListContainer from './app/containers/ChampionsListContainer';
import ChampionDetailsContainer from './app/containers/ChampionDetailsContainer';
import ChampionOverview from './app/components/ChampionOverview';
import champions from './app/reducers/champions';
import { createStore, combineReducers } from 'redux';
import { RiotAPI } from './app/api'
import { Provider, connect } from 'react-redux';
import { Actions, Scene, Router, Modal } from 'react-native-router-flux';

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
