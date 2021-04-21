import { call, put, takeEvery } from "redux-saga/effects";

import { getUserData } from "../../lib/api";

import apiConstants from "../constants/apiConstants";

function* _getUserData(action) {
  try {
    const response = yield call(getUserData);
    yield put({
      type: apiConstants.GET_USER_DATA_SUCCESS,
      response: response.data
    });

  } catch (e) {
    yield put({
      type: apiConstants.GET_USER_DATA_FAIL,
      response: e.response
    });
  }
}

export function* Saga() {
  yield takeEvery(apiConstants.GET_USER_DATA, _getUserData);
}
