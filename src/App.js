import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import BobaList from './components/BobaList/BobaList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <BobaList />
      <Footer />
    </div>
  );
}

export default App;
