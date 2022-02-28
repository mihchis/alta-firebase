import React from 'react';
import DashboardCenter from './dashboardcenter';
import DashboardRight from './sidebar';

const DashboardMain = () => {
  return (
    <div className="mainHome-wapper">
      <DashboardCenter />
      <DashboardRight />
    </div>
  );
};

export default DashboardMain;