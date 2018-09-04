/**
 *  Fetch User
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER } from 'containers/App/constants';
import { userFetched, userFetchingError } from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';
/* eslint-disable indent */
// prettier-ignore
export function* getUser() {

    const requestURL = '/api/current_user';

    try {
        // Call our request helper (see 'utils/request')
        const data = yield call(request, requestURL);
        // console.log(data);
        yield put(userFetched(data));
    } catch (err) {
        yield put(userFetchingError(err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
/* eslint-disable indent */
// prettier-ignore
export default function* defaultSaga() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount
    yield takeLatest(FETCH_USER, getUser);
}
