const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                message: action.payload.message,
            };
        case "GET_USER":
            return {
                ...state,
                user: action.payload,
                message: action.payload.message,
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload.token,
                message: action.payload.message,
            };
        case "UPDATE_FIRST_ON_BOARD":
            return {
                ...state,
                user: {
                    ...state.user,
                    firstOnBoard: action.payload
                }
            };
        default:
            return state;
    }
};

export default users;
