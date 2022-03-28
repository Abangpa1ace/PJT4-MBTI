import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import MainPage from '@/views/pages/MainPage';
import TestPage from '@/views/pages/TestPage';
import MidResultPage from '@/views/pages/MidResultPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/mid-result" element={<MidResultPage />} />
    </ReactRoutes>
  )
}

export default Routes