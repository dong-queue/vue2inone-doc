// https://vuex.vuejs.org/en/actions.html

export default {
  setPage: function setPage(context, page) {
    context.commit('setPage', page)
  }
}
