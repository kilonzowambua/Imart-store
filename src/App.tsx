import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import Nopage from "./components/pages/Nopage.tsx";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/our-products" Component={Products} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={Nopage} />
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
