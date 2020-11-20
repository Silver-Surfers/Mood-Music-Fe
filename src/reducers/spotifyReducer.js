import { SET_PLAYLISTS, SET_TOKEN } from '../../src/actions/spotifyActions';
import { SET_LOADING } from '../actions/azureActions';

const initialState = { 
  token: '',
  playlists: [],
  loading: true
};

export default function spotifyReducer(state = initialState, action) {
  switch(action.type) {
    case SET_TOKEN:
      return { 
        ...state,
        token: action.payload
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
