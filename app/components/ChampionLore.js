/**
 * LeaguePedia | ChampionLore.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import React, { Component, View, Text, Image, ScrollView, PropTypes, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

class ChampionLore extends Component {
  render() {
    const { lore } = this.props;
    const parsedLore = lore && lore.replace(/<br>/g, '\n');

    return (
      <ScrollView>
        <View style={styles.base}>
          <View style={styles.lore}>
            <Image style={styles.grunge} resizeMode="contain" source={require('../assets/content_grunge.png')} />
            <Text style={styles.loreText}>{ parsedLore }</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

ChampionLore.propTypes = {
  lore: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#051d25'
  },
  lore: {
    backgroundColor: '#d9c197',
    width: Dimensions.get('window').width * 0.90,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 50,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5
  },
  loreText: {
    margin: 20,
    color: '#473415'
  },
  grunge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.30,
    position: 'absolute',
    justifyContent: 'flex-start',
    marginTop: -100,
    marginLeft: -25
  }
});

export default ChampionLore;
