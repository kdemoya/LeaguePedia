/**
 * LeaguePedia | ChampionsList.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import ChampionIcon from './ChampionIcon';
import * as _ from 'lodash';

class ChampionsList extends Component {

  /**
   * Renders champion icon.
   *
   * @param {Object} champ - Current champion.
   * @returns {ReactElement} Champion icon.
   */
  renderChamp(champ) {
    return (
        <ChampionIcon
            key={champ.id}
            id={champ.id}
            picture={champ.key}
            name={champ.name}
            dispatch={this.props.dispatch}
            version={this.props.version}
        />
    );
  }

  /**
   * Sorts champions by name and generates champions icon.
   *
   * @param {Object} champions - List of champions
   * @returns {ReactElement} Rendered list of champion icons.
   */
  renderChampionsList(champions) {
    return _.chain(champions)
        .sortBy((champ) => { return champ.name })
        .map((champ) => { return this.renderChamp(champ) })
        .value();
  }

  render() {
    const { champions } = this.props;
    const champsList = this.renderChampionsList(champions);
    return (
      <ImageBackground resizeMode="stretch" style={styles.image} source={require('../assets/background.jpg')}>
        <ScrollView>
          <View style={styles.base}>
            {champsList}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

ChampionsList.propTypes = {
  champions: PropTypes.object,
  version: PropTypes.string
};

const styles = StyleSheet.create({
  base: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  image: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    flex: 1
  }
});

export default ChampionsList;
