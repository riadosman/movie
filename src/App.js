import "./App.css";
import MovieCom from "./components/MovieCom";
import Navbar from "./components/Navbar";
import Create from "./components/Create"
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from './components/Product';

function App() {
  const [value, setvalue] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar value={value} setvalue={setvalue} />
        <Routes>
          <Route
            path="/movie"
            element={<MovieCom value={value} setvalue={setvalue} />}
          />
          <Route
            path="/movie/Create"
            element={<Create/>}
          />
          <Route
            path="/movie/Product/:id"
            element={<Product/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
