// const events = (state, action) => {
//   switch (action.type) {
//     case "GET_EVENT":
//       return {
//         ...state,
//         event: action.payload,
//       };
//     case "GET_ALLEVENTS":
//       return {
//         ...state,
//         events: action.payload
//       }
//     default:
//       return state;
//   }
// };
// export default events;

const events = (state, action) => {
  switch (action.type) {
    case "GET_EVENT":
      return {
        ...state,
        event: action.payload,
      };
    case "GET_ALLEVENTS":
      return {
        ...state,
        events: action.payload
      }
    case "CREATE_EVENT":
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};

export default events;

