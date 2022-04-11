import React from 'react'
import { useRoutes, Route, Routes as ReactRoutes } from 'react-router-dom';
import HomePage from '@/views/pages/HomePage';
import TestPage from '@/views/pages/TestPage';
import MidResultPage from '@/views/pages/MidResultPage';
import FinalResultPage from '@/views/pages/FinalResultPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result/mid" element={<MidResultPage />} />
      <Route path="/result/final" element={<FinalResultPage />} />
    </ReactRoutes>
  )
}

export default Routes