import Helper from "~/helpers/Helper";

export const state = () => ({
  single: Helper.generateProduct({imagesParam: []}),
  collection: []
})

export const getters = {
  get_single(state) {
    return state.single;
  },
  get_collection(state) {
    return state.collection;
  },
}

export const mutations = {
  set_single(state, newState) {
    state.single = newState;
  },
  set_collection(state, newState) {
    state.collection = newState;
  },
  push_collection(state, newState) {
    state.collection.push(newState);
  }
}
