/**
 * LeaguePedia | champions.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import { FETCH_CHAMPS, FETCH_SUCESS, FETCH_SINGLE_SUCCESS } from './actionTypes';

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

export const fetchSingleSuccess = (response) => {
  return {
    type: FETCH_SINGLE_SUCCESS,
    response
  }
};
