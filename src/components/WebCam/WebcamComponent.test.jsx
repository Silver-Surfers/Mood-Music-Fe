import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WebcamCapture } from './WebcamComponent';
import { Provider } from 'react-redux';

describe('Webcam component', () => {
  afterEach(() => cleanup());
  it('renders takes a snapshot photo through the user/s webcam', () => {
    const { asFragment } = render(
      <Provider>
        <WebcamCapture />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
