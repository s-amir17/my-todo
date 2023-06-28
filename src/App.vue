<template>
   <div>
      <h1>TO-DO list</h1>
      <div class="wrap">
         <TodoForm></TodoForm>
         <TodoList></TodoList>

         <div v-if="todos.length">
            <hr />
            <h3 class="tasks">Tasks: {{ doneTodos }}</h3>
         </div>
         <h3
            v-else
            style="color: red">
            No todos yet.
         </h3>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
   name: 'App',
   components: { TodoForm, TodoList },

   computed: {
      ...mapGetters(['todos', 'doneTodos']),
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
   padding: 25px;
   border-radius: 10px;
   word-wrap: break-word;
}

hr {
   margin: 5px 0;
}
.tasks {
   color: burlywood;
}
</style>
