import Helper from "~/helpers/Helper";
import DataStorage from "~/helpers/DataStorage";

const singleProductStorage = new DataStorage("singleProduct");
const collectionProductStorage = new DataStorage("collectionProduct");

export const state = () => ({
  single: null,
  collection: []
})

export const getters = {
  get_single(state) {
    if(! state.single) {
      return singleProductStorage.getLatestValue();
    } // endif
    return state.single;
  },
  get_collection(state) {
    if(state.collection.length < 1) {
      const collectionStorage = collectionProductStorage.getLatestValue()
      return collectionStorage
    } // endif
    return state.collection;
  },
}

export const mutations = {
  set_single(state, newState) {
    singleProductStorage.commitLatestValue(newState);
    state.single = newState;
  },
  set_collection(state, newState) {
    collectionProductStorage.commitLatestValue(newState);
    state.collection = newState;
  }
}
