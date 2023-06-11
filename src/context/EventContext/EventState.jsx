import { createContext, useReducer } from "react";
import axios from "axios";
import eventReducer from "./EventReducer";

const initialState = {
  event: null,
  message: null,
};

const API_URL = "http://localhost:8080";
export const EventContext = createContext(initialState);

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const getEventById = async (eventId) => {
    try {
      const res = await axios.get(`${API_URL}/events/byId/${eventId}`);
      dispatch({
        type: "GET_EVENT",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EventContext.Provider
      value={{
        event: state.event,
        message: state.message,
        getEventById,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
