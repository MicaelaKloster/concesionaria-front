import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feedback from  './components/Feedback';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Feedback />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
