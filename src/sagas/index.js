import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../api';


function* repoSearch(action) {
    const { itemsPerPage, currentPage } = action;
    try {
        const response = yield call(api.get, '/search/repositories',
            {
                q: `${action.text}+language:${action.language}`,
                page: action.currentPage,
                per_page: action.itemsPerPage
            });

        console.log({ response })

        yield put({ type: "REPO_SEARCH_SUCCEEDED", response, currentPage, itemsPerPage });
    } catch (e) {
        console.error(e)
        yield put({ type: "REPO_SEARCH_FAILED", message: e.response.data.message });
    }
}

function* rootSaga() {
    yield takeEvery('REPO_SEARCH', repoSearch);
}


export default rootSaga;