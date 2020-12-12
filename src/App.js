import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Title from './components/Title/Title';
import BobaList from './components/BobaList/BobaList';
import About from './components/About/About';
import BobaDetails from './components/BobaDetails/BobaDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Route exact path="/" component={BobaList}/>
        <Route path="/about" component={About}/>
        <Route path="/details/:id" component={BobaDetails}/>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
