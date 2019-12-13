import { GET_ERRORS, DELETE_ERROR_MSGS } from "../actions/types";

const initialState = {
    emailNotFound: "",
    passwordIncorrect: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        case DELETE_ERROR_MSGS:
            return state;
        default:
            return state;
    }
}