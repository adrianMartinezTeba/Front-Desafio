const tasks = (state, action) => {
    switch (action.type) {
      case "GET_TAG":
        return {
          ...state,//para que no se borre el estado anterior
          tag: action.payload,//el payload es la informacion que nos viene de la peticion
        };
      case "GET_TAGS":
        return {
          ...state,
          tags: action.payload.tags
        }
      default:
        return state;
    }
  };
  export default tasks;
  