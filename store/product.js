import Helper from "~/helpers/Helper";

export const state = () => ({
  single: Helper.generateProduct({imagesParam: []})
})

export const getters = {
  get_single(state) {
    return state.single;
  },
}

export const mutations = {
  set_single(state, newState) {
    state.single = newState;
  }
}
