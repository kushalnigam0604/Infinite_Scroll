import {call , put , takeEvery} from 'redux-saga/effects';
import {GET_USERS_FETCH , GET_USERS_SUCCESS} from './actions';

function usersFetch(){
    return  fetch(`https://free-nba.p.rapidapi.com/players?per_page=35?current_page=1`, {
        headers: {
          "X-RapidAPI-Key": "590bee806cmsh68df35f26db9b04p1cb438jsn17872e05d345",
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      })
        .then((resp) => resp.json())
}

function* workGetUsersFetch(){
    const users = yield call(usersFetch);
    yield put({type: GET_USERS_SUCCESS , users})
}

function* mySaga(){
    yield takeEvery(GET_USERS_FETCH ,workGetUsersFetch );
}

export default mySaga;


