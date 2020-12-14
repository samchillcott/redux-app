import { all } from 'redux-sagas/effects';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([
        userSaga(),
    ])
}