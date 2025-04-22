import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Workshop  from './components/Workshop';
// import WorkshopPage from './components/WorkshopPage '


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Workshop />} />
          {/* <Route path="/workshops" element={<WorkshopPage />} /> */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
