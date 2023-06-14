// import { createContext, useReducer } from "react";
// import axios from "axios";
// import eventReducer from "./EventReducer";
// import events from "./EventReducer";

// const initialState = {
//   event: [],
//   events:[],
//   message: null,
// };

// const API_URL = "http://localhost:8080";
// export const EventContext = createContext(initialState);

// export const EventProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(eventReducer, initialState);

//   const getEventById = async (eventId) => {
//     try {
//       const res = await axios.get(`${API_URL}/events/byId/${eventId}`);
//       dispatch({
//         type: "GET_EVENT",
//         payload: res.data,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const getAllEvents = async () =>{
//     try {
//       const res = await axios.get(API_URL + '/events/all')
//       dispatch({
//         type:"GET_ALLEVENTS",
//         payload:res.data
//       })
//       console.log(res);
//       console.log(events);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return (
//     <EventContext.Provider
//       value={{
//         event: state.event,
//         events:state.events,
//         message: state.message,
//         getEventById,
//         getAllEvents
//       }}
//     >
//       {children}
//     </EventContext.Provider>
//   );
// };

// export default EventProvider;

import { createContext, useReducer } from "react";
import axios from "axios";
import eventReducer from "./EventReducer";

const initialState = {
  event: null,
  events:[],
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

  const getAllEvents = async () =>{
    try {
      const res = await axios.get(API_URL + '/events/all')
      dispatch({
        type:"GET_ALLEVENTS",
        payload:res.data
      })
    } catch (error) {
      console.error(error);
    }
  }

  const createEvent = async (eventData) => {
    try {
        const res = await axios.post(`${API_URL}/events/create`, eventData);
        dispatch({
            type: "CREATE_EVENT",
            payload: res.data,
        });
        console.log(res);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <EventContext.Provider
      value={{
        event: state.event,
        events:state.events,
        message: state.message,
        getEventById,
        getAllEvents,
        createEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
