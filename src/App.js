import React from 'react';
import Chart from './BarChart/ResponsiveBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home'





const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chartbar" element={<Chart />} />
        </Routes>
      </Router>

      
    </div>
  );
};

export default App;