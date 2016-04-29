/**
 * LeaguePedia | ChampionDetails.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import React, { Component, View, Text, Image, ScrollView, PropTypes, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import * as champ from '../api/championDetail.json';

class ChampionDetails extends Component {
  render() {
    const lore = champ.lore.replace(/<br>/g, '\n');

    return (
      <View style={styles.base}>
        <Image
            resizeMode="cover"
            style={styles.header}
            source={{uri: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champ.key + '_0.jpg'}}>
          <Image resizeMode="cover" style={styles.headerShadow} source={require('../assets/header_shadow.png')}>
            <Text style={styles.champName}>{champ.name}</Text>
            <Text style={styles.champTitle}>{champ.title}</Text>
          </Image>
        </Image>
        <ScrollView>
          <View style={styles.lore}>
            <Image style={styles.grunge} resizeMode="contain" source={require('../assets/content_grunge.png')} />
            <Text style={styles.loreText}>{lore}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#051d25',
    height: Dimensions.get('window').height
  },
  header: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.30,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  headerShadow: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  champName: {
    color: '#ffffff',
    fontSize: 20
  },
  champTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontStyle: 'italic'
  },
  lore: {
    backgroundColor: '#d9c197',
    width: Dimensions.get('window').width * 0.90,
    alignSelf: 'center',
    alignItems: 'flex-start',
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
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').height * 0.30,
    position: 'absolute',
    justifyContent: 'flex-start'
  }
});

export default ChampionDetails;
