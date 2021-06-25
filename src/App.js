import React from 'react';
import './App.css';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <span>Hello, App!</span>
    </StarwarsProvider>
  );
}

export default App;
