import { createContext, useReducer } from "react";
import axios from "axios";
import tasks from './UserReducer';

const initialState = {};

const API_URL = "http://localhost:8080";
export const UserContext = createContext(initialState);
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasks, initialState);

  const getTasks = async () => {
    const res = await axios.get(API_URL + '/tags/all');
    dispatch({
      type: "GET_TASKS",
      payload: res.data
    });
    console.log();
  };

  return (
    <TaskContext.Provider
      value={{
   tasks:state.tasks,
   getTasks
      
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
