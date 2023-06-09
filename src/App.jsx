import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import './App.css'
import "./App.scss";

import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Menu from "./components/Menu/Menu"
import Buscar from "./components/Buscar/Buscar";

function App() {
  const isLoginPage = window.location.pathname === "/";
  const selectedInterests = JSON.parse(localStorage.getItem("selectedInterests")) || [];
  return (
    <>
      <BrowserRouter>
        {!isLoginPage && <Menu />}
        <Routes>
          <Route path="/" element={<Login />} /> {/* Ruta de inicio de sesión */}
          <Route path="/home" element={<Home />} />
          <Route path="/int" element={<InterestsForm />} />
          <Route
            path="/buscar"
            element={<Buscar selectedInterests={selectedInterests} />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;