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
import { TagProvider } from "./context/TagsContext/TagContext";
import Calendar from "./components/calendar/calendar";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import CanalesDifusion from "./components/canalesDifusion/canalesDifusion";

function App() {
  return (
    <BrowserRouter>
      <TagProvider>
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
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/createEvent" element={<CreateEvent />} />
                  <Route path="/CanalesDifusion" element={<CanalesDifusion />} />
                </Routes>
              </CanalDifusionProvider>
            </EventProvider>
          </NewsProvider>
        </UserProvider>
      </TagProvider>
    </BrowserRouter>
  );
}

export default App;
