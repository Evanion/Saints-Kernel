import { fork, all } from "redux-saga/effects";
import { sagas as modules } from "./modules";

export default function* sagas(api) {
  let Sagas = [];
  for (let key in modules) {
    if (!modules.hasOwnProperty(key)) continue;
    Sagas.push(fork(modules[key], api));
  }
  yield all(Sagas);
}
