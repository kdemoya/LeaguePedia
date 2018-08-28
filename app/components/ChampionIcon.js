/**
 * LeaguePedia | ChampionIcon.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
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
              source={{uri: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`}}
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
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  version: PropTypes.string.isRequired
};

export default ChampionIcon;