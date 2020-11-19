import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import { AuthPage } from '../AuthPage';
import { StillShot } from '../WebCam/StillShot';
import { WebcamCapture } from '../WebCam/WebcamComponent';
import { MusicPlayer } from '../MusicPlayer';
import { AboutPage } from '../AboutPage';



export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            exact path="/" 
            component={AuthPage} 
          />
          <Route
            exact path="/webcam"
            component={WebcamCapture}
          />
          <Route 
            exact path="/image" 
            component={StillShot} 
          />
          <Route
            exact path="/media"
            component={MusicPlayer}
          />
          <Route
            exact path="/about"
            component={AboutPage}
          />
        </Switch>
      </Router>
    </>
  );
}
