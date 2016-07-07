/**
 * LeaguePedia | index.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import * as actions from '../actions/champions';
import { riotApi } from '../constants/configs';

const getVersion = (store) => {
  fetch(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/versions?api_key=${riotApi.development_key}`)
    .then((result) => {
      result.json().then((versions) => {
        const currentVersion = versions[0];
        store.dispatch(actions.fetchVersion(currentVersion));
      }).catch((error) => {
        console.log(error)
      });
    })
    .catch((error) => {
      // TODO: Dispatch an error action.
      console.log(error);
    }
  );
};

export const RiotAPI = {

  /**
   * Fetch list of all champions from Riot's API.
   *
   * @param {Object} store - The Redux store.
   */
  getAllChamps: (store) => {
    getVersion(store);

    fetch(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=${riotApi.development_key}`)
      .then((result) => {
        result.json().then((champions) => {
          store.dispatch(actions.fetchSuccess(champions.data));
        }).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        // TODO: Dispatch an error action.
        console.log(error);
      }
    );
  },

  /**
   * Fetch data for single champion.
   *
   * @param {String} champId    - Champion ID.
   * @param {Function} dispatch - Dispatch function.
   * @param {Object} Actions    - Actions object.
   */
  fetchSingle: (champId, dispatch, Actions) => {
    fetch('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + champId + '?champData=info,spells,lore,skins,stats&api_key=' + riotApi.development_key)
      .then((result) => {
        result.json().then((champion) => {
          dispatch(actions.fetchSingleSuccess(champion));
        }).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        // TODO: Dispatch an error action.
        console.log(error);
      }
    );
  }
};
