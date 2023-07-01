<template>
   <div>
      <h1>TO-DO list</h1>
      <div class="wrap">
         <TodoForm @addTodo="addTodo"></TodoForm>
         <TodoList :todos="todos" @removeTodo="removeTodo"></TodoList>

         <hr v-show="todos.length" />

         <div v-if="todos.length" class="bottom">
            <h3 class="tasks">Tasks: {{ doneTodos }}</h3>
            <button @click="clearList" class="clear">Clear list</button>
         </div>
         <h3 v-else style="color: red">No todos yet.</h3>
      </div>
   </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
   name: 'App',
   components: { TodoForm, TodoList },

   data() {
      return {
         todos: [],
      };
   },

   methods: {
      addTodo(todo) {
         this.todos.push(todo);
         localStorage.setItem('todos', JSON.stringify(this.todos));
      },

      removeTodo(id) {
         this.todos = this.todos.filter(todo => todo.id !== id);
         localStorage.setItem('todos', JSON.stringify(this.todos));
      },

      clearList() {
         this.todos = [];
         localStorage.setItem('todos', JSON.stringify(this.todos));
      },
   },

   computed: {
      doneTodos() {
         return this.todos.filter(todo => !todo.isDone).length;
      },
   },

   mounted() {
      let t = JSON.parse(localStorage.getItem('todos'));
      this.todos = t;
   },
};
</script>

<style lang="scss">
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

#app {
   font-family: Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   display: flex;
   justify-content: center;
   align-items: center;
}

h1 {
   margin: 25px 0;
   text-align: center;
}

.wrap {
   // :not(:last-child) {
   //    margin-bottom: 10px;
   // }

   width: 550px;
   background-color: rgb(244, 244, 244);
   background-color: darkslategrey;
   border-radius: 10px;
   padding: 25px;
   margin: 15px;
}

hr {
   margin: 5px 0;
}

.bottom {
   display: flex;
   justify-content: space-between;
   align-items: center;
   .tasks {
      color: burlywood;
   }
   .clear {
      padding: 5px;
      cursor: pointer;
   }
}
</style>
