// src/App.tsx
import React from 'react';
import './App.css';
import ImageCarousel from './components/ImageCarousel';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Random Image Carousel</h1>
      <ImageCarousel />
    </div>
  );
};

export default App;

