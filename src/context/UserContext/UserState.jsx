import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from './UserReducer'

const initialState = {
    users: [],
    // order:[]
  };
  
  const API_URL = "http://localhost:8080";
  export const UsersContext = createContext(initialState);
  export const UsersProvider = ({children}) =>{
    const [state,dispatch] = useReducer(UserReducer,initialState)
   
    const login = async (loginForm) => {
        const res = await axios.post(API_URL + "/users/login", loginForm);
    
        //guardamos la respuesta de la peticion en el estado arriba esta [state,dispatch]
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
    
        //guardamos el token en el local storage
        if (res.data) {
            console.log(res.data);
          localStorage.setItem("token", JSON.stringify(res.data.token));
        //   localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      };
      return (
        <UsersContext.Provider
          value={{
            token: state.token,
            users: state.user,
            login,
          }}
        >
          {children}
        </UsersContext.Provider>
      );
    };