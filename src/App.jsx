import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
