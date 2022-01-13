import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
