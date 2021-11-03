import { h } from 'preact';
import { getCurrentUrl, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Product from '../routes/product';
import { useState } from 'preact/hooks';

const App = () => {
  const [currentUrl, setCurrentUrl] = useState({});
  const onRouteChange = () => {
    setCurrentUrl(getCurrentUrl());
  };
  return (
    <div id='app'>
      <Header currentUrl={currentUrl} />
      <Router onChange={onRouteChange}>
        <Home path='/' />
        <Product path='/product/:id' />
      </Router>
    </div>
  );
};

export default App;
