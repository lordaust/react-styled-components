import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Theme from './theme';

import Header from './pages/Header';
import Footer from './pages/Footer';

import Frontpage from './pages/Frontpage';
import Products from './pages/Products';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Theme>
        <body ClassName=''>
          <Header headerText='Header 1' />
          <Route path='/' exact component={Frontpage} />
          <Route path='/our-products/' component={Products} />
          <Route path='/experiences/' component={Experiences} />
          <Route path='/about-us/' component={About} />
          <Route path='/privacy-and-cookies/' component={Privacy} />
          <Route path='/contact/' component={Contact} />
          <Footer />
        </body>
      </Theme>
    </Router>
  );
};

export default App;
