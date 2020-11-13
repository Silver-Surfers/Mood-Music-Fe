/* eslint-disable indent */
import { makeRequest } from '../../src/services/mood-music-api.js';

export const SET_IMAGE_BLOB = 'SET_IMAGE_BLOB';
export const setImageBlob = imageBlob => ({
  type: SET_IMAGE_BLOB,
  payload: imageBlob
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const fetchImage = (imageBlob) => dispatch => {
  makeRequest(imageBlob)
    .then(imageBlob => {
        dispatch(setImageBlob(imageBlob));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
