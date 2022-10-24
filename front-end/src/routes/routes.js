import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


// import Login from "../containers/Login";
// import Register from "../containers/Register";
import Home from "../containers/Home";

function Rotas() {
  return (
    <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          {/* <Route element={<Login/>} path="/login"></Route>
        <Route element={<Register/>} path="/register"></Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
