import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter.js';

function App() {
  return (
    <>
      <nav></nav>
      <main>
        <Counter label='Klknij mnie' size={2} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;