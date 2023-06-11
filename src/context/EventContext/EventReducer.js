const eventReducer = (state, action) => {
  switch (action.type) {
    case "GET_EVENT":
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
