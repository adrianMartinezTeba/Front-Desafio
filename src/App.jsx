import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import { UsersProvider } from "./context/UserContext/UserState";
import Buscar from "./components/Buscar/Buscar";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          {token ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="/int" element={<InterestsForm />} />
          <Route path="/buscar" element={<Buscar />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;