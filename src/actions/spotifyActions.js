import { requestMusic } from '../services/mood-music-api';
import { setLoading } from './azureActions';

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token
});

export const SET_PLAYLISTS = 'SET_PLAYLISTS';
export const setPlaylists = playlists => ({
  type: SET_PLAYLISTS,
  payload: playlists
});

export const fetchMusic = (emotions, accessToken) => dispatch => {
  requestMusic(emotions, accessToken)
    .then(playlists => {
      dispatch(setPlaylists(playlists));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
