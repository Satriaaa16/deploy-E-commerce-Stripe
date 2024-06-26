import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Pay from './Pay';
import Success from './Success';
import About from './about';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
