import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Buscar from "./components/Buscar/Buscar";
import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/int" element={<InterestsForm />} />
          <Route path="/buscar" element={<Buscar />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;