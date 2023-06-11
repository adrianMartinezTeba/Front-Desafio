import { createContext, useReducer } from "react";
import axios from "axios";
import news from './NewReducer'

const initialState ={
news:[]
};
  
  const API_URL = "http://localhost:8080";
  export const NewsContext = createContext(initialState);
  export const NewsProvider = ({children}) =>{
    const [state,dispatch] = useReducer(news,initialState)
  
    const getAllNews = async () => {
        const res = await axios.get(API_URL + "/news/all");
        dispatch({
          type: "GET_NEWS",
          payload: res.data,
        });
        console.log(res);
      };
      return (
        <NewsContext.Provider
          value={{
            news:state.news,
            getAllNews
          }}
        >
          {children}
        </NewsContext.Provider>
      );
    };