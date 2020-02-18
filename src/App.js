import React from 'react';
import app from './App.module.css';
import Header from "./Header/Header";
import Information from "./Information/Information";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={app.wrapper}>
      <Header/>
      <Information/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
