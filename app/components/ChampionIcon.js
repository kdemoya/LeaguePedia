/**
 * LeaguePedia | ChampionIcon.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import React, { Component, View, Text, Image, PropTypes, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RiotAPI } from '../api'

class ChampionIcon extends Component {

  handleChampSelection(champId) {
    RiotAPI.fetchSingle(champId, this.props.dispatch);
    Actions.details();
  }

  render() {
    const { id, picture, name, version } = this.props;

    return (
        <View style={styles.base}>
          <TouchableHighlight onPress={ () => { this.handleChampSelection(id) }}>
            <Image
              style={styles.picture}
              source={{uri: `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${picture}.png`}}
            />
          </TouchableHighlight>
          <Text style={styles.text}>{name}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    width: 75,
    height: 100,
    alignItems: 'center'
  },
  picture: {
    width: 75,
    height: 75
  },
  text: {
    color: '#ffffff',
    fontSize: 12
  }
});

ChampionIcon.propTypes = {
  id: React.PropTypes.string.isRequired,
  picture: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  version: React.PropTypes.string.isRequired
};

export default ChampionIcon;