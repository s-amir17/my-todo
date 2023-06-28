import { createStore } from 'vuex';

export default createStore({
   state: {
      todos: [],
   },

   getters: {
      todos: ({ todos }) => todos,
      doneTodos: ({ todos }) => todos.filter(todo => !todo.isDone).length,
   },

   mutations: {
      ADD_TODO(state, todo) {
         state.todos.push(todo);
      },
      DELETE_TODO(state, id) {
         state.todos = state.todos.filter(todo => todo.id !== id);
      },
   },

   actions: {
      addTodo({ commit }, todo) {
         if (todo) {
            commit('ADD_TODO', todo);
         }
      },

      deleteTodo({ commit }, id) {
         commit('DELETE_TODO', id);
      },
   },

   modules: {},
});
