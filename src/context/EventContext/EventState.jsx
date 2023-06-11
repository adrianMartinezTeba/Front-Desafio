import { createContext, useReducer } from "react";
import axios from "axios";
import events from './EventReducer'

const initialState ={
events:[]
};
  
  const API_URL = "http://localhost:8080";
  export const EventsContext = createContext(initialState);
  export const EventsProvider = ({children}) =>{
    const [state,dispatch] = useReducer(events,initialState)
  
    const getAllEvents = async () => {
        const res = await axios.get(API_URL + "/events/all");
        dispatch({
          type: "GET_EVENTS",
          payload: res.data,
        });
        console.log(res);
      };
      return (
        <EventsContext.Provider
          value={{
            events:state.events,
            getAllEvents
          }}
        >
          {children}
        </EventsContext.Provider>
      );
    };
