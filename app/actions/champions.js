/**
 * LeaguePedia | champions.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import { FETCH_CHAMPS, FETCH_SUCESS } from './actionTypes';

export const fetchChamps = () => {
  return {
    type: FETCH_CHAMPS
  }
};

export const fetchSuccess = (response) => {
  return {
    type: FETCH_SUCESS,
    response
  }
};
