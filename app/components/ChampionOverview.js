/**
 * LeaguePedia | ChampionOverview.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

class ChampionOverview extends Component {

  renderStatsList(stats) {
    const parseStats = ['hp', 'mp', 'attackdamage', 'attackspeedoffset', 'movespeed', 'hpregen', 'mpregen', 'armor', 'spellblock'];

    return _.map(parseStats, (stat) => {
      const statPerLvl = stats[stat + 'perlevel'];

      return (
        <View style={styles.stat}>
          <View>
            <Text style={styles.statName}>{stat.toUpperCase()}</Text>
            <View style={styles.valueWrapper}>
              <Text style={styles.statValue}>{stats[stat]}</Text>
              <Text style={styles.statPerLevel}>{statPerLvl && '+' + statPerLvl}</Text>
              <Text style={styles.statName}>{statPerLvl && 'PER LVL'}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  renderInfoBar(name, level) {
    return _.map(Array(10).fill(), (v, index) => {
      const className = (index + 1) <= level ? name : 'emptyInfoBar';

      return (
        <View style={[styles.infoBarIndicator, styles[className]]} />
      )
    });
  };

  renderInfo(infos) {
    const _this = this;

    return _.map(_.keys(infos), (infoName) => {
      return (
        <View style={styles.infoBar}>
          <Text style={styles.infoName}>{infoName.toUpperCase()}</Text>
          { _this.renderInfoBar(infoName, infos[infoName]) }
        </View>
      )
    });
  };

  render() {
    const { champion } = this.props;

    return (
      <View style={styles.base}>
        <View style={styles.statWrapper}>
          {champion && this.renderStatsList(champion.stats)}
        </View>
        <View style={styles.infoBarWrapper}>
          {champion && this.renderInfo(champion.info)}
        </View>
      </View>
    );
  }
}

ChampionOverview.propTypes = {
  champion: PropTypes.object
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  statWrapper: {
    flex: 1,
    backgroundColor: '#051d25',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.33,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10
  },
  stat: {
    width: Dimensions.get('window').width * 0.5
  },
  statName: {
    color: '#f5f5f5',
    fontSize: 10
  },
  valueWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statValue: {
    color: '#f5f5f5',
    fontSize: 18
  },
  statPerLevel: {
    fontWeight: 'bold',
    color: '#33691e',
    marginLeft: 5,
    marginRight: 5
  },
  infoBarWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  infoBar: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  infoName: {
    color: '#f5f5f5',
    width: Dimensions.get('window').width * 0.22
  },
  infoBarIndicator: {
    flex: 1,
    height: 5,
    marginLeft: 2
  },
  attack: {
    backgroundColor: '#b71c1c'
  },
  defense: {
    backgroundColor: '#33691e'
  },
  magic: {
    backgroundColor: '#1565c0'
  },
  difficulty: {
    backgroundColor: '#4527a0'
  },
  emptyInfoBar: {
    backgroundColor: '#f5f5f5'
  }
});

export default ChampionOverview;
