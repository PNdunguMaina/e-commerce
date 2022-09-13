import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

function HomeContainer() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
    </Router>
  );
}

export default HomeContainer;
