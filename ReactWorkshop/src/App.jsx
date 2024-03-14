import "./App.css";
import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <ToastContainer postion="top right" />
      <Footer/>
    </div>
  );
}

export default App;
