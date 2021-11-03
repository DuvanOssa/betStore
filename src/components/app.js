import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Product from '../routes/product';
import { useState } from 'preact/hooks';
import HeaderProvider from '../context/headerContext';

const App = () => {
  const [currentProductId, setCurrentProductId] = useState('');
  const onRouteChange = (e) => {
    setCurrentProductId(e.current.props.id);
  };
  return (
    <div id='app'>
      <HeaderProvider>
        <Header currentProductId={currentProductId} />
        <Router onChange={onRouteChange}>
          <Home path='/' />
          <Product path='/product/:id' />
        </Router>
      </HeaderProvider>
    </div>
  );
};

export default App;
