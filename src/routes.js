import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Catalogo from './Catalogo/Catalogo';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" element={<LandingPage />} />
      <Route  path="/catalogo" element={<Catalogo />} />
    </Switch>
  </Router>
);

export default Routes