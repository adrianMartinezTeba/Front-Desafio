const users = (state, action) => {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,//para que no se borre el estado anterior
          user: action.payload,//el payload es la informacion que nos viene de la peticion
        };
        case "LOGIN":
        return{
            ...state,
            token: action.payload.token,
        message: action.payload.message,
        };
        case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        logoutMessage:action.payload.message
      };
      case "GET_USER":
      return {
        ...state,
        user: action.payload,
        message: "",
      };

      default:
        return state;
    }
  };
  export default users;