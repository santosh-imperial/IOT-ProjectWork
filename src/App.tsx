import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/welcome/WelcomeSection';
import MetricsGrid from './components/metrics/MetricsGrid';
import ChartsSection from './components/charts/ChartsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <WelcomeSection />
        <MetricsGrid />
        <ChartsSection />
      </main>
    </div>
  );
}

export default App;