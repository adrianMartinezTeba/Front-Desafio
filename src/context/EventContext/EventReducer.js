const events = (state, action) => {
  switch (action.type) {
    case "GET_EVENT":
      return {
        ...state,//para que no se borre el estado anterior
        event: action.payload,//el payload es la informacion que nos viene de la peticion
      };
    case "GET_ALLEVENTS":
      return {
        ...state,
        events: action.payload
      }
    default:
      return state;
  }
};
export default events;
