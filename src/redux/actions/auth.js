import apiConstants from "../constants/apiConstants";

export const getUserData = user => ({
  type: apiConstants.GET_USER_DATA,
  payload: user
});
