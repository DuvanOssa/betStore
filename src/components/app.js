import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Product from '../routes/product';

const App = () => (
  <div id='app'>
    <Header />
    <Router>
      <Home path='/' />
      <Product path='/product/:id' />
    </Router>
  </div>
);

export default App;
