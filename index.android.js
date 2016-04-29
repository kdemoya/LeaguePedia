/**
 * LeaguePedia | index.android.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

// TODO: Standardize Android and iOS entry points.
import React, { AppRegistry, Component } from 'react-native';
import ChampionsListContainer from './app/containers/ChampionsListContainer';
import ChampionDetails from './app/components/ChampionDetails';
import champions from './app/reducers/champions';
import { createStore } from 'redux';
import { RiotAPI } from './app/api'
import { Provider } from 'react-redux';
import { Actions, Scene, Router } from 'react-native-router-flux';

const store = createStore(champions);

class LeaguePedia extends Component {
  render() {
    RiotAPI.getAllChamps(store);

    return (
      <Provider store={store}>
        <ChampionDetails />
        {/*<Router>
          <Scene key="root">
            <Scene key="championList" component={ChampionsListContainer} hideNavBar={true} />
            <Scene key="championDetails" component={ChampionDetails} hideNavBar={true} />
          </Scene>
        </Router>*/}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('LeaguePedia', () => LeaguePedia);
