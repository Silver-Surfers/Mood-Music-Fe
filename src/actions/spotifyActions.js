import { requestMusic } from '../services/mood-music-api';
import { setLoading } from './azureActions';

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token
});

export const SET_PLAYLIST = 'SET_PLAYLIST';
export const setPlaylist = playlist => ({
  type: SET_PLAYLIST,
  payload: playlist
});

export const fetchMusic = (emotions) => dispatch => {
  requestMusic(emotions)
    .then(playlist => {
      dispatch(setPlaylist(playlist));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
