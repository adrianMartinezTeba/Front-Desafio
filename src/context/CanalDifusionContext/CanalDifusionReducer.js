const canalDifusionReducer = (state, action) => {
  switch (action.type) {
    case "GET_CANAL_DIFUSION":
      return {
        ...state,
        canalDifusion: action.payload,
      };
    case "GET_ALL_CANAL_DIFUSION":
      return {
        ...state,
        canalDifusiones: action.payload,
      };
    default:
      return state;
  }
};

export default canalDifusionReducer;
