import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../api';


function* repoSearch(action) {
    try {
        const res = yield call(api.get, '/search/repositories', { q: `${action.text}+language:${action.language}` });
        console.log(res)
        yield put({ type: "REPO_SEARCH_SUCCEEDED", res });
    } catch (e) {
        yield put({ type: "REPO_SEARCH_FAILED", message: e.message });
    }
}

function* rootSaga() {
    yield takeEvery("REPO_SEARCH", repoSearch);
}


export default rootSaga;