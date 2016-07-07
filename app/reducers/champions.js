/**
 * LeaguePedia | champions.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import * as types from '../actions/actionTypes';

export default function champions(state = {}, action) {
  switch (action.type) {
    case types.FETCH_CHAMPS:
      return state;
    case types.FETCH_SUCESS:
      return { ...state, champions: action.response };
    case types.FETCH_SINGLE_SUCCESS:
      return { ...state, champion: action.response };
    case types.FETCH_VERSION:
      return { ...state, version: action.response };
    default:
      return state;
  }
}
