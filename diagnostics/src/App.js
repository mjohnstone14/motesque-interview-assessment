import logo from './images/MotesqueLogoWhite-1.png';
import './styles/App.css';
import HomePage from './components/HomePage';
import TestsHistory from './components/TestsHistory';
import AppProvider from './context/AppProvider';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [currentStyle, setCurrentStyle] = useState("HomePage");

  /**
   * Set the useState hook to change the background image, kind of rudimentary.
   * If I had more time I would have liked to build on this more.
   * Perhaps even fade the images away (z-index maybe)
   * and fix resetting the background img on refresh
   */ 
  const changeToHistory = () => {
    setCurrentStyle('TestHistory');
  }

  const changeToHome = () => {
    setCurrentStyle('HomePage');
  }

  return (
    <AppProvider>
      <Router>
        <div className={currentStyle}>
          <header className="App-header">
            <div className="RouterLinkStyle">
              <Breadcrumbs
                aria-label="breadcrumb"
                style={{color: 'white', marginLeft:'2%'}}
              >
                <Link 
                  onClick={() => changeToHome()} 
                  className="LinkStyle" 
                  to="/"
                >
                  <HomeIcon style={{marginRight: '5%'}}/>
                  <Typography>Home</Typography>
                </Link>
                <Link 
                  onClick={() => changeToHistory()} 
                  className="LinkStyle" 
                  to="/history"
                >
                  <AccessTimeIcon style={{marginRight: '5%'}}/>
                  <Typography>History</Typography>
                </Link>
              </Breadcrumbs>
            </div>
          </header>
          <img className="Logo" src={logo} alt="logo" />
          <div className="App-body">
            <Switch>
              <Route exact path='/'>
                <HomePage/>
              </Route>
              <Route exact path='/history'>
                <TestsHistory />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
