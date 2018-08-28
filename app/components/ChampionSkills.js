/**
 * LeaguePedia | ChampionSkills.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import * as _ from 'lodash';

class ChampionSkills extends Component {

  renderSkills(skills, version) {
    return _.map(skills, (skill) => {
      return (
        <View key={skill.id}>
          <LinearGradient colors={['#051f24', '#011314']} style={styles.skill}>
            <Image
              style={styles.skillIcon}
              source={{uri: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skill.image.full}`}}
            />
            <View>
              <Text style={[styles.skillDetail, styles.skillName]}>{skill.name.toUpperCase()}</Text>
              <Text style={styles.skillDetail}>{skill.costBurn === '0' ? 'NO COST' : skill.costBurn + ' MANA'}</Text>
              <Text style={styles.skillDetail}>{skill.rangeBurn + ' RANGE'}</Text>
            </View>
          </LinearGradient>
          <View style={styles.description}>
            <Image style={styles.grunge} resizeMode="contain" source={require('../assets/content_grunge.png')} />
            <Text style={styles.descriptionText}>{skill.description}</Text>
          </View>
        </View>
      )
    });
  }

  render() {
    const { champion, version } = this.props;

    return (
      <ScrollView>
        <View style={styles.base}>
          { champion && this.renderSkills(champion.spells, version) }
        </View>
      </ScrollView>
    );
  }
}

ChampionSkills.propTypes = {
  champion: PropTypes.object,
  version: PropTypes.string
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#051d25',
    width: Dimensions.get('window').width,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10
  },
  skill: {
    padding: 5,
    height: Dimensions.get('window').height * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#8b7023',
    borderStyle: 'solid',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5
  },
  skillIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 3
  },
  skillName: {
    fontWeight: 'bold'
  },
  skillDetail: {
    color: '#f5f5f5',
    fontSize: 10
  },
  description: {
    backgroundColor: '#d9c197',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10
  },
  descriptionText: {
    color: '#473415',
    fontSize: 10
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

export default ChampionSkills;
