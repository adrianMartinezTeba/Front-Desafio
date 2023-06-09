import { createContext, useReducer } from "react";
import axios from "axios";
import users from './UserReducer'

const initialState = {
    user: [],
    // order:[]
  };
  
  const API_URL = "http://localhost:8080";
  export const UserContext = createContext(initialState);
  export const UserProvider = ({children}) =>{
    const [state,dispatch] = useReducer(users,initialState)
  
    const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user);
    
        //guardamos el token en el estado
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
    
        //guardamos el token en el local storage
        if (res.data) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
        }
      };
      
      return (
        <UserContext.Provider
          value={{
            token: state.token,
            user: state.user,
          
            login,
           
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };