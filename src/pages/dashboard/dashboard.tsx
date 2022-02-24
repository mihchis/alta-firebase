import React from 'react';
import DashboardCenter from './dashboardcenter';
import Sidebar from './sidebar';

const DashboardMain = () => {
  return (
    <div className="mainHome-wapper">
      <DashboardCenter />
      <Sidebar />
    </div>
  );
};

export default DashboardMain;