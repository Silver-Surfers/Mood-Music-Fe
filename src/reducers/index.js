import { combineReducers } from 'redux';
import azureReducer from './azureReducer';
import spotifyReducer from './spotifyReducer';

export default combineReducers({
  azureReducer,
  spotifyReducer
});
