import React from 'react';
import { Provider } from 'react-redux';
import { WebcamCapture } from './WebcamComponent';
// import { createStore } from 'createReduxStore';
const reduxStore = require('redux-store');

const store = reduxStore();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <WebcamCapture />
      </Provider>
    </>
  );
}
