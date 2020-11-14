/* eslint-disable max-len */
import { SET_IMAGE_BLOB, SET_IMAGE, SET_LOADING, SET_EMOTION } from '../../src/actions/azureActions';

const initialState = {
  loading: true,
  imageBlob: '',
  image: '',
  emotion: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADING: 
      return {
        ...state, 
        loading: action.payload
      };
    case SET_IMAGE_BLOB:
      return {
        ...state,
        imageBlob: action.payload
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case SET_EMOTION:
      return {
        ...state,
        emotion: action.payload
      };
  }
}
