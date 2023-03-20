import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout(): React.ReactElement {
  return (
    <main>
      <header>
        <h1>Header Maybe</h1>
      </header>
      <Outlet />
    </main>
  );
}

export default Layout;
