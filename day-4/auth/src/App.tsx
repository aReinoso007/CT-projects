import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home-page';
import CallbackPage from './pages/Callback-page';
import ProfilePage from './pages/Profile-page';

const App: React.FC = ()=> {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/profile' element={<ProfilePage />} /> 
      <Route path='/callbackk' element={<CallbackPage />} /> 
    </Routes>
  );
}

export default App;
