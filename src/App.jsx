import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import InterestsForm from "./components/interestsForm/interestsForm";
import Buscar from "./components/Buscar/Buscar";
import OnBoarding from "./components/onBoarding/onBoarding";
import { UserProvider } from "./context/UserContext/UserState";
import { NewsProvider } from "./context/NewContext/NewState";
import { EventProvider } from "./context/EventContext/EventState";
import EventoIndividual from "./components/eventoIndividual/eventoIndividual";
import CanalDifusion from "./components/canalDifusion/canalDifusion";
import { CanalDifusionProvider } from "./context/CanalDifusionContext/CanalDifusionState";
import NewIndividual from "./components/NewIndividual/NewIndividual";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NewsProvider>
          <EventProvider>
            <CanalDifusionProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/int" element={<InterestsForm />} />
                <Route path="/buscar" element={<Buscar />} />
                <Route path="/onBoarding" element={<OnBoarding />} />
                <Route path="/event/:id" element={<EventoIndividual />} />
                <Route path="/canal/:id" element={<CanalDifusion />} />
                <Route path="/news/:id" element={<NewIndividual />} />
              </Routes>
            </CanalDifusionProvider>
          </EventProvider>
        </NewsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
