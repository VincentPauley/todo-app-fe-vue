const Todos = {
  namespaced: true,
  state: {
    count: 7,
    todos: []
  },
  getters: {
    count: state => state.todos.length
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      console.log('add todo: ', payload);
      commit('addTodo', payload);
    }
  }
};

export default Todos;
