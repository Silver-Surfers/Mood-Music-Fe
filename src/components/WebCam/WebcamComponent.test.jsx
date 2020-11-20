import React from 'react';
import { 
  MemoryRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { WebcamCapture } from './WebcamComponent.jsx';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Webcam component', () => {
  afterEach(() => cleanup());
  it('renders takes a snapshot photo through the user/s webcam', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router 
          initialEntries={['/webcam']}>
          <Switch>
            <Route
              exact path="/webcam"
              component={WebcamCapture}
            />
          </Switch>
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
