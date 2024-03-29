import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import canalDifusionReducer from './CanalDifusionReducer';

const initialState = {
  canalDifusion: [],
  canalDifusiones: [],
};

const API_URL = 'http://localhost:8080';
export const CanalDifusionContext = createContext(initialState);

export const CanalDifusionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(canalDifusionReducer, initialState);
  const getAllCanalDifusion = async () => {
    try {
      const res = await axios.get(`${API_URL}/canalDifusiones/all`);
      dispatch({
        type: 'GET_ALLCANALDIFUSION',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getCanalDifusionById = async (eventId) => {
    try {
      const res = await axios.get(API_URL + '/canalDifusiones/byId/' + eventId);
      dispatch({
        type: 'GET_CANALDIFUSION',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateCanalDifusion = async (canalDifusionId, canalDifusionData) => {
    try {
      const res = await axios.put(`${API_URL}/canalDifusiones/update/${canalDifusionId}`, canalDifusionData);
      dispatch({
        type: 'UPDATE_CANAL',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCanalDifusion = async (canalDifusionId) => {
    try {
      const res = await axios.delete(`${API_URL}/canalDifusion/delete/${canalDifusionId}`);
      dispatch({
        type: 'SET_MESSAGE',
        payload: res.data.message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CanalDifusionContext.Provider
      value={{
        canalDifusion: state.canalDifusion,
        canalDifusiones: state.canalDifusiones,
        message: state.message,
        getAllCanalDifusion,
        getCanalDifusionById,
        updateCanalDifusion,
        deleteCanalDifusion,
        
      }}
    >
      {children}
    </CanalDifusionContext.Provider>
  );
};
