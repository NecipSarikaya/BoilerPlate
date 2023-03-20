import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import AppRoutes from '@/route';
import { store } from '@/store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
