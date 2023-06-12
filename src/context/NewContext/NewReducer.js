const news = (state, action) => {
    switch (action.type) {
      case "GET_NEWS":
        return {
          ...state,//para que no se borre el estado anterior
          news: action.payload,//el payload es la informacion que nos viene de la peticion
        };
        case "GET_NEWBYID":
          return {
            ...state,//para que no se borre el estado anterior
            new: action.payload,//el payload es la informacion que nos viene de la peticion
          };
  
      default:
        return state;
    }
  };
  export default news;