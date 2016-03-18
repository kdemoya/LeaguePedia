/**
 * LeaguePedia | index.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import { fetchSuccess } from '../actions/champions';
import { riotApi } from '../constants/configs';

export const RiotAPI = {
  /**
   * Fetch list of all champions form Riot's API.
   *
   * @param {Object} store - The Redux store.
   */
  getAllChamps: (store) => {
    fetch('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=' + riotApi.development_key)
      .then((result) => {
        var champions = JSON.parse(result._bodyText);
        store.dispatch(fetchSuccess(champions.data));
      })
      .catch((error) => {
        // TODO: Dispatch an error action.
        console.log(error);
      });
  }
};
