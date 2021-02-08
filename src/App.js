import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Weather from './components/Weather';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
         <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Weather}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>  
    <h1 className='head'>Weather</h1>
    <p className="head-info">Search for your current weather in your city or country</p>
  </div>
)


export default App;
