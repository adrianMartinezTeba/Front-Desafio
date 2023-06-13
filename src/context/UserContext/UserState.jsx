import { createContext, useReducer } from "react";
import axios from "axios";
import users from './UserReducer';

const initialState = {
  user:'',
  users:[]
};

const API_URL = "http://localhost:8080";
export const UserContext = createContext(initialState);
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(users, initialState);

  const login = async (loginForm) => {
    const res = await axios.post(API_URL + "/users/login", loginForm);

    //guardamos el token en el estado
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    //guardamos el token en el local storage
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      console.log(res.data.user);
    }
  };

  const getUserLogged = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + '/users/userLogged', {
      headers: {
        Authorization: token
      }
    });
    dispatch({
      type: "GET_USER",
      payload: res.data
    });
    console.log(res);
  };
  const getAllUsers = async () => {
    const res = await axios.get(API_URL + '/users/getAll', {
    });
    dispatch({
      type: "GET_ALLUSERS",
      payload: res.data
    });
    console.log(res);
  };

  const update = async (userForm) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.put(API_URL + '/users/update', userForm, {
      headers: {
        Authorization: token
      }
    });
    dispatch({
      type: "UPDATE_USER",
      payload: res.data
    });
  };

  const updateFirstOnBoard = async (firstOnBoard) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.put(API_URL + "/users/firstOnBoard", { firstOnBoard }, {
        headers: {
          Authorization: token
        }
      });

      dispatch({
        type: "UPDATE_FIRST_ON_BOARD",
        payload: firstOnBoard
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        users:state.users,
        token: state.token,
        firstOnBoard:state.firstOnBoard,
        login,
        getUserLogged,
        update,
        updateFirstOnBoard,
        getAllUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
