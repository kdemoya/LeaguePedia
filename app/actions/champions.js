/**
 * LeaguePedia | champions.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import * as types from './actionTypes';

export const fetchChamps = () => {
  return {
    type: types.FETCH_CHAMPS
  }
};

export const fetchVersion = (response) => {
  return {
    type: types.FETCH_VERSION,
    response
  }
};

export const fetchSuccess = (response) => {
  return {
    type: types.FETCH_SUCESS,
    response
  }
};

export const fetchSingleSuccess = (response) => {
  return {
    type: types.FETCH_SINGLE_SUCCESS,
    response
  }
};
