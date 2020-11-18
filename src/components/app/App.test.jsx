/* eslint-disable max-len */
import React from 'react';
import { render, cleanup, fireEvent, waitFor, screen } from '@testing-library/react';
import { createStore } from 'redux';
import reducer from '../../reducers/azureReducer';
import App from './App';
import { makeRequest } from '../../services/mood-music-api';
import { Provider } from 'react-redux';


describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', async() => {
    // makeRequest([
    //   {    
    //     'anger': '0',
    //     'contempt': '0',
    //     'disgust': '0',
    //     'fear': '0',
    //     'happiness': '0.001',
    //     'neutral': '0.993',
    //     'sadness': '0.002',
    //     'surprise': '0.005'
    //   }
    // ]);

    const store = createStore(reducer);
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);
    return waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });

  });
});

