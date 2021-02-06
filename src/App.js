import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from './components/About';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
         <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>  
    <h1 className='head'>Hemma</h1>
  </div>
)


export default App;
