import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Workshop  from './components/Workshop';
import HomePage from './components/HomePage';
import CommunicationSkill from './components/skills/CommunicationSkill/CommunicationSkill'
import MoneyManagementSkill from './components/skills/MoneyManagementSkill'

function App() {
  return (
    <>
    <Router>
       <Routes>
       <Route path="/workshop" element={<Workshop />} />
       <Route path="/" element={<HomePage />} />
          <Route path="/skills/money-management-skill" element={<MoneyManagementSkill />} /> 

          <Route path="/skills/communication-skill" element={<CommunicationSkill />} />
    
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
