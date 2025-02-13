// src/App.tsx
import React from 'react';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import ImageCarouselFade from './components/ImageCarouselFade';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Random Image Carousel</h1>
      <ImageCarousel />
      <ImageCarouselFade />
    </div>
  );
};

export default App;

