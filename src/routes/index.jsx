import { Navigate, Route, Routes } from "react-router"
import React from "react"
import Home from "../Pages/Home"

function APPRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default APPRouter;