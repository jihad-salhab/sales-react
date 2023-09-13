import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminIndex from './AdminApp/AdminIndex';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Temp from './Temp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path='/sales-react' element={<Temp />}></Route>
          <Route path="/sales-react/AdminDashboard/*" element={<AdminIndex />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

