import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Index from "../components/Index";
import Registrarse from "../components/Registrarse";

import Error from "../components/layout/paginas/Error";



const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Registrarse />} />
       
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
