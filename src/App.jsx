
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import './App.css'
import "./App.scss";

import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Menu from "./components/Menu/Menu"

function App() {
  
  const isLoginPage = window.location.pathname === "/login";

  return (
    <>
         <BrowserRouter>
        {!isLoginPage && <Menu />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/int" element={<InterestsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
