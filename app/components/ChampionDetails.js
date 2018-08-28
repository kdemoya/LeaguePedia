/**
 * LeaguePedia | ChampionDetails.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import ChampionOverview from '../components/ChampionOverview';
import ChampionSkills from '../components/ChampionSkills';
import ChampionSkins from '../components/ChampionSkins';
import ChampionLore from '../components/ChampionLore';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class ChampionDetails extends Component {

  renderHeader(champion) {
    return (
      <ImageBackground
          resizeMode="cover"
          style={styles.header}
          source={{uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}}>
        <ImageBackground resizeMode="cover" style={styles.headerShadow} source={require('../assets/header_shadow.png')}>
          <Text style={styles.champName}>{champion.name}</Text>
          <Text style={styles.champTitle}>{champion.title}</Text>
        </ImageBackground>
      </ImageBackground>
    )
  }

  render() {
    const { champion, version } = this.props;
    return (
      <View style={styles.base}>
        { champion && this.renderHeader(champion) }
        <ScrollableTabView
            tabBarUnderlineColor="#00bfa5"
            tabBarBackgroundColor="#0b3e4c"
            tabBarActiveTextColor="#bbc8cb"
            tabBarInactiveTextColor="#809aa1" >
          <ChampionOverview champion={champion} tabLabel="Overview" />
          <ChampionSkills champion={champion} version={version} tabLabel="Skills" />
          <ChampionSkins champion={champion} tabLabel="Skins" />
          <ChampionLore lore={champion && champion.lore} tabLabel="Lore" />
        </ScrollableTabView>
      </View>
    );
  }
}

ChampionDetails.propTypes = {
  champion: PropTypes.object,
  version: PropTypes.string
};

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
  }
});

export default ChampionDetails;
