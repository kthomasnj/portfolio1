import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutMe />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;