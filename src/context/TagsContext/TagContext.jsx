import { createContext, useReducer } from "react";
import axios from "axios";
import tags from './TagReducer';

const initialState = {
    tags:[]
};

const API_URL = "http://localhost:8080";
export const TagContext = createContext(initialState);
export const TagProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tags, initialState);

  const getTags = async () => {
    const res = await axios.get(API_URL + '/tags/all');
    dispatch({
      type: "GET_TAGS",
      payload: res.data
    });
  };

  return (
    <TagContext.Provider
      value={{
   tags:state.tags,
   getTags
      
      }}
    >
      {children}
    </TagContext.Provider>
  );
};
