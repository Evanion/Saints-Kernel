import * as user from "./user";
import * as forum from "./forum";

// register your module here
const modules = {
  forum,
  user
};
let actions = {};
let reducers = {};
let sagas = {};
let types = [];

for (let key in modules) {
  if (!modules.hasOwnProperty(key)) continue;
  actions[key] = modules[key]["actions"];
  reducers[key] = modules[key]["reducer"].default;
  sagas[key] = modules[key]["sagas"];
  types.push(modules[key]["types"]);
}
module.exports = {
  actions,
  reducers,
  sagas,
  types
};
