import { SET_TOKEN } from '../../src/actions/spotifyActions';

const initialState = { 
  token: ''
};

export default function spotifyReducer(state = initialState, action) {
  switch(action.type) {
    case SET_TOKEN:
      return { 
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

