// Layout.js
import React from 'react';

import { Outlet } from 'react-router-dom';  
import Sidebar from './componets/sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
