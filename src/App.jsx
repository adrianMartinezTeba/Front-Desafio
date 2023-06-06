
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import './App.css'
import "./App.scss";
import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";

function App() {
  

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/int" element={<InterestsForm/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
