import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import AdminIndex from './AdminApp/AdminIndex';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Temp from './Temp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>

          <Route path='/' element={<Temp />}></Route>
          <Route path="/AdminDashboard/*" element={<AdminIndex />}></Route>
          <Route path='*' element={<div>Not Found</div>}></Route>
        </Routes>
      </HashRouter>
    </Provider>

  </React.StrictMode>
);

