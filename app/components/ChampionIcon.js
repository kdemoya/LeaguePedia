/**
 * LeaguePedia | ChampionIcon.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import React, { Component, View, Text, Image, PropTypes, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ChampionIcon extends Component {
  render() {
    const { picture, name } = this.props;

    return (
        <View style={styles.base}>
          <Image
              style={styles.picture}
              source={{uri: 'http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/' + picture + '.png'}}
          />
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
  picture: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default ChampionIcon;