import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Gallery from './components/Gallery';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/gallery" component={Gallery} />
  </Switch>
);

export default Routes;