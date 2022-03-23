import React from 'react'
import {  Route, Routes as ReactRoutes } from 'react-router-dom';
import MainPage from '@/views/pages/MainPage';
import TestPage from '@/views/pages/TestPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
    </ReactRoutes>
  )
}

export default Routes