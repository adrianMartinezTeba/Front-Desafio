import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Buscar from "./components/Buscar/Buscar";
import { UserProvider } from "./context/UserContext/UserState";
import OnBoarding from "./components/onBoarding/onBoarding";
import { NewsProvider } from "./context/NewContext/NewState";
import { EventsProvider } from "./context/EventContext/EventState";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NewsProvider>
         <EventsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/int" element={<InterestsForm />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/onBoarding" element={<OnBoarding/>} />
        </Routes>
        </EventsProvider> 
        </NewsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
