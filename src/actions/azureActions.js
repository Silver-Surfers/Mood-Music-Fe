/* eslint-disable indent */
import { makeRequest } from '../../src/services/mood-music-api.js';

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const SET_IMAGE_BLOB = 'SET_IMAGE_BLOB';
export const setImageBlob = imageBlob => ({
  type: SET_IMAGE_BLOB,
  payload: imageBlob
});

export const SET_IMAGE = 'SET_IMAGE';
export const setImage = image => ({
  type: SET_IMAGE,
  payload: image
});

export const SET_EMOTION = 'SET_EMOTION';
export const setEmotion = emotion => ({
  type: SET_EMOTION,
  payload: emotion
});

export const fetchImage = (imageBlob) => dispatch => {
  makeRequest(imageBlob)
    .then(emotion => {
      dispatch(setEmotion(emotion));
    })
   .finally(() => {
      dispatch(setLoading(false));
    });
};
