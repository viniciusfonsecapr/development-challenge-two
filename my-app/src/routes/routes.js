import React from "react";

import { Route ,Routes, BrowserRouter } from "react-router-dom";

import Login from "../containers/Login";
// import Register from "../containers/Register";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/login"></Route>
        {/* <Route component={Register} path="/register"></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
