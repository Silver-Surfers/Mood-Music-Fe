import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import StillShot from './WebCam/StillShot';
import { WebcamCapture } from './WebCam/WebcamComponent';



export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            exact path="/" 
            component={WebcamCapture} 
          />
          <Route 
            exact path="/image" 
            component={StillShot} 
          />
        </Switch>
      </Router>
    </>
  );
}
