const tasks = (state, action) => {
    switch (action.type) {
      case "GET_TASK":
        return {
          ...state,//para que no se borre el estado anterior
          task: action.payload,//el payload es la informacion que nos viene de la peticion
        };
      case "GET_TASKS":
        return {
          ...state,
          tasks: action.payload
        }
      default:
        return state;
    }
  };
  export default tasks;
  