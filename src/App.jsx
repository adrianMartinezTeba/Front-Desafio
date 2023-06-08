import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import './App.css'
import "./App.scss";

import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Menu from "./components/Menu/Menu"
import Buscar from "./components/Buscar/Buscar";

function App() {

  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Login />} /> {/* Ruta de inicio de sesión */}
          <Route path="/home" element={<Home />} />
          <Route path="/int" element={<InterestsForm />} />
          <Route path="/buscar" element={<Buscar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;