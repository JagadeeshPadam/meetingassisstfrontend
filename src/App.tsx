import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MeetingDetails from './pages/MeetingDetails';
import MeetingScheduler from './pages/MeetingScheduler';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#1e1e2f]">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header title="Meeting Details" />
          <Routes>
            <Route path="/meeting" element={<MeetingDetails />} />
            <Route path="/updates" element={<MeetingScheduler />} />
            <Route path="/urgent" element={<MeetingScheduler />} />
            <Route path="/time" element={<MeetingScheduler />} />
            <Route path="/" element={<MeetingScheduler />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;