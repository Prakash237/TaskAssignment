import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Products />
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;
