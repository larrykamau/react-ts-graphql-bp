import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import data from './tba.json';
import { Story } from './types';
// export function* doSomething() {}

export function* getStories() {
  const stories: Story[] = yield data;
  if (stories?.length > 0) {
    yield put(actions.storiesLoaded(stories));
  }
}
export function* toBeAddedSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.loadStories.type, getStories);
}
