import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import HomePage from '@/views/pages/HomePage';
import TestPage from '@/views/pages/TestPage';
import MidResultPage from '@/views/pages/MidResultPage';
import ResultPage from '@/views/pages/ResultPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/mid-result" element={<MidResultPage />} />
      <Route path="/result" element={<ResultPage />} />
    </ReactRoutes>
  )
}

export default Routes