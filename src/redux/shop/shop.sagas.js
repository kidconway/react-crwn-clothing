import { takeEvery, call, all, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("FIRED: fetchCollectionAsync");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    console.log(err.message);
    yield put(fetchCollectionsFailure(err.message));
  }

  // dispatch(fetchCollectionsStart());
  //
  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(err => dispatch(fetchCollectionsFailure(err.message)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
