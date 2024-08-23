import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <div className="dashboard">
      
     
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;