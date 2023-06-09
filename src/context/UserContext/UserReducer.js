const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                message: action.payload.message,
            };
        case "GET_USER":
            return {
                ...state,
                user: action.payload.token,
                message: action.payload.message,
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload.token,
                message: action.payload.message,
            };

        default:
            return state;
    }
};
export default users;