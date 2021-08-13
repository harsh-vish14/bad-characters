import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
