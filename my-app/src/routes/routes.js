import React from "react";

import { Route ,Routes, BrowserRouter } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Register/>} path="/register"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
