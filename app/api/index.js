/**
 * LeaguePedia | index.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import * as actions from '../actions/champions';

const getVersion = (store) => {
  fetch(`https://ddragon.leagueoflegends.com/api/versions.json`)
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

    fetch(`https://ddragon.leagueoflegends.com/cdn/8.17.1/data/en_US/champion.json`)
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
    fetch(`https://ddragon.leagueoflegends.com/cdn/8.17.1/data/en_US/champion/${champId}.json`)
      .then((result) => {
        result.json().then((champion) => {
          dispatch(actions.fetchSingleSuccess(champion.data[champId]));
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
