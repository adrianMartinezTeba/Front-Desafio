const canalDifusion = (state, action) => {
  switch (action.type) {
    case "GET_CANALDIFUSION":
      return {
        ...state,
        canalDifusion: action.payload,
      };
    case "GET_ALLCANALDIFUSION":
      return {
        ...state,
        canalDifusiones: action.payload,
      };
    default:
      return state;
  }
};

export default canalDifusion;
