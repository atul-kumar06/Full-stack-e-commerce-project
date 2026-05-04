import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}></Route>
        {/* Admin Layout */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
