import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Buscar from "./components/Buscar/Buscar";
import { UsersProvider } from "./context/UserContext/UserState";

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
          <Route path="/home" element={<Home />} />
          <Route path="/int" element={<InterestsForm />} />
          <Route
            path="/buscar"
            element={<Buscar selectedInterests={selectedInterests} />}  />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;