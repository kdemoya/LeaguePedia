/**
 * LeaguePedia | ChampionsList.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import React, { Component, PropTypes, StyleSheet, Text, View, ScrollView, ListView, Image } from 'react-native';
import ChampionIcon from './ChampionIcon';
import * as champs from '../api/champions.json';
import * as _ from 'lodash';
import Dimensions from 'Dimensions';

class ChampionsList extends Component {

  /**
   * Renders champion icon.
   *
   * @param {Object} champ - Current champion.
   * @returns {Object} React Component.
   */
  renderChamp(champ) {
    return (
        <ChampionIcon
            key={champ.id}
            picture={champ.key}
            name={champ.name}
        />
    );
  }

  render() {
    const champsList = _.map(champs, (champ) => { return this.renderChamp(champ)});

    return (
      <Image resizeMode="stretch" style={styles.image} source={require('../assets/background.jpg')}>
        <ScrollView>
            <View style={styles.base}>
              {champsList}
            </View>
        </ScrollView>
      </Image>
    );
  }
}

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
