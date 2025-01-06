import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

// Lazy load page components
const DashboardOverview = React.lazy(() => import('./pages/DashboardOverview'));
const SatisfactionAnalysis = React.lazy(() => import('./pages/SatisfactionAnalysis'));
const TeamEngagement = React.lazy(() => import('./pages/TeamEngagement'));
// Import other pages similarly

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/satisfaction/*" element={<SatisfactionAnalysis />} />
          <Route path="/engagement/*" element={<TeamEngagement />} />
          {/* Add other routes */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;