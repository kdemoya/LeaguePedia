/**
 * LeaguePedia | champions.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import { FETCH_CHAMPS, FETCH_SUCESS, FETCH_SINGLE_SUCCESS } from '../actions/actionTypes';

export default function champions(state = {}, action) {
  switch (action.type) {
    case FETCH_CHAMPS:
      return state;
    case FETCH_SUCESS:
      return { ...state, champions: action.response };
    case FETCH_SINGLE_SUCCESS:
      return { ...state, champion: action.response };
    default:
      return state;
  }
}
