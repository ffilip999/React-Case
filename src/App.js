import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from './components/About';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
         <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
        </switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Hemma</h1>
  </div>
)


export default App;
