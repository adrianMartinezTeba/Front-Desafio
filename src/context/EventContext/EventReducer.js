const events = (state, action) => {
    switch (action.type) {
      case "GET_EVENTS":
        return {
          ...state,//para que no se borre el estado anterior
          events: action.payload,//el payload es la informacion que nos viene de la peticion
        };

      default:
        return state;
    }
  };
  export default events;