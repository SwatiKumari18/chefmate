import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/chefmate" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  </Router>
);

export default AppRoutes;
