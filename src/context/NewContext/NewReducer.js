const users = (state, action) => {
    switch (action.type) {
      case "GET_NEWS":
        return {
          ...state,//para que no se borre el estado anterior
          news: action.payload,//el payload es la informacion que nos viene de la peticion
        };

      default:
        return state;
    }
  };
  export default users;