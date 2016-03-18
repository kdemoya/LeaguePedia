/**
 * LeaguePedia | champions.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import { FETCH_CHAMPS, FETCH_SUCESS } from '../actions/actionTypes';
import { RiotAPI } from '../api'

export default function champions(state = {}, action) {
  switch (action.type) {
    case FETCH_CHAMPS:
      return state;
    case FETCH_SUCESS:
      return { ...state, champions: action.response };
    default:
      return state;
  }
}
