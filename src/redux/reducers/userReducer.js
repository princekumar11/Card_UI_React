import apiConstants from "../constants/apiConstants";

const initialStateSchema = {
    userDetails: [],
    isFetchingUserDetails: false
};

let initialState = initialStateSchema;
const localData = localStorage.getItem("authToken");
if (localData && localData !== undefined) {
    try {
        initialState.authToken = localData;
    } catch (e) {
        initialState = initialStateSchema;
    }
}

const productReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {

        case apiConstants.GET_USER_DATA:
            newState = {
                ...state,
                userDetails: [],
                isFetchingUserDetails: true
            };
            return newState;

        case apiConstants.GET_USER_DATA_SUCCESS:
            newState = {
                ...state,
                userDetails: action.response.data,
                isFetchingUserDetails: false
            };
            return newState;

        case apiConstants.GET_USER_DATA_FAIL:
            newState = {
                ...state,
                isFetchingUserDetails: false,
                error: action.response.data
            };
            return newState;

        default:
            return state;
    }
};

export default productReducer;
