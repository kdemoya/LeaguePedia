/**
 * LeaguePedia | ChampionSkins.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import React, { Component, View, Text, Image, ScrollView, PropTypes, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import * as _ from 'lodash';

class ChampionSkins extends Component {
  renderSkinsList(champion) {
    return _.map(champion.skins, (skin) => {
      const skinId = champion.key + '_' + skin.num;

      return (
          <View style={styles.skin} key={skinId}>
            <Image
                style={styles.picture}
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + skinId + '.jpg'}}
            />
            <Text style={styles.skinName}>{skin.name}</Text>
          </View>
      )
    });
  }

  render() {
    const { champion } = this.props;
    const skins = champion && this.renderSkinsList(champion);

    return (
      <ScrollView>
        <View style={styles.base}>
          <View style={styles.skinsWrapper}>
            {skins}
          </View>
        </View>
      </ScrollView>
    );
  }
}

ChampionSkins.propTypes = {
  champion: React.PropTypes.object
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#051d25',
    height: Dimensions.get('window').height
  },
  skinsWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    alignItems: 'center',
    elevation: 3
  },
  picture: {
    width: Dimensions.get('window').width / 2.2,
    height: 100,
    marginTop: 10,
    flexDirection: 'row',
    flex: 1
  },
  skin: {
    alignItems: 'center'
  },
  skinName: {
    color: '#ffffff',
    fontSize: 12
  }
});

export default ChampionSkins;

