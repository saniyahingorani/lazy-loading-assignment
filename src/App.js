import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';

// Lazy load the About component
const About = lazy(() => import('./Pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
