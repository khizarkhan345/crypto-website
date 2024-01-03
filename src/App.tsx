import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Analytics from "./components/Analytics";
import GetApp from "./components/GetApp";
import Access from "./components/Access";
import Testimonial from "./components/Testimonial";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import "./App.css";

function App() {
  return (
    <div className="App bg-dark-blue">
      <Header />
      <Hero />
      <Logos />
      <Analytics />
      <GetApp />
      <Access />
      <Testimonial />
      <GetStarted />
      <Footer />
      <BottomBar />
    </div>
  );
}

export default App;
