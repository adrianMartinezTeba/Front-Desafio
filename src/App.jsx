import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Buscar from "./components/Buscar/Buscar";
import { UsersProvider } from "./context/UserContext/UserState";

function App() {
  // Limpiar el almacenamiento local al inicio

  return (
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/int" element={<InterestsForm />} />
          <Route path="/buscar" element={<Buscar />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;