import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/detail/Detail";
import Catalog from "../pages/Catalog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyboard" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
};

export default Routers;
