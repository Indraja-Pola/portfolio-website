import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Intoduction/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;