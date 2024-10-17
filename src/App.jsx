import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar_v2';
import Home from './components/Home_v2';
import Feedback from  './components/Feedback_v2';
import AboutUs from './components/AboutUs_v2';
import Footer from './components/Footer_v2';

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
