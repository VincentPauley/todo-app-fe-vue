// NEXT: add more complicated factors to the set like approvals or other nested structures.
const todoFixture = [
  {
    title: 'Draft Players',
    body: 'select talent from draft pool and sign to team.',
    author: 'Stan Bowman',
    created: '10-4-2008',
    completed: true
  },
  {
    title: 'Practice Rush',
    body:
      'have the team work drills and planned entries to the offensive zone maintaining control of the puck.',
    author: 'Joel Quenville',
    created: '11-11-2009',
    completed: false
  },
  {
    title: 'Press Conference',
    body:
      'Meet with media to release press statements and answer some questions.',
    author: 'Stan Bowman',
    created: '12-23-2007',
    completed: false
  },
  {
    title: 'Play Game Against Nashville',
    body:
      'Host Nashville Predators and beat them at home, focus on east/west attack and posession',
    author: 'Joel Quenville',
    created: '5-02-2015',
    completed: true
  },
  {
    title: 'Championship Parade',
    body: 'celebrate win with the city, drink responsibly',
    author: 'Stan Bowman',
    created: '6-11-2015',
    completed: true
  } // ...
];

const fetchTodosApiMock = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.05) {
      reject('simulated failure');
    }

    setTimeout(() => {
      resolve(todoFixture);
    }, Math.random() * 2000);
  });
};

const Todos = {
  namespaced: true,
  state: {
    count: 7,
    todos: [],
    fetchInProgress: false
  },
  getters: {
    count: state => state.todos.length,
    todos: state => state.todos,
    fetchInProgress: state => state.fetchInProgress
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    setFetchInProgress(state, payload) {
      state.fetchInProgress = payload;
    },
    setTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      console.log('add todo: ', payload);
      commit('addTodo', payload);
    },
    async fetchTodos({ commit }) {
      commit('setFetchInProgress', true);
      try {
        const todos = await fetchTodosApiMock();
        commit('setTodos', todos);
      } catch (e) {
        console.log('...fetch error');
        console.log(e);
      } finally {
        commit('setFetchInProgress', false);
      }

      console.log('fetching todo actions');
    }
  }
};

export default Todos;
