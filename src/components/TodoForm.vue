<template>
   <form
      class="todo"
      @click.prevent>
      <input
         v-model="todo.text"
         ref="inp"
         type="text"
         placeholder="your todo . . ." />
      <button @click="sendTodo(todo)">Add todo</button>
   </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   name: 'TodoForm',
   data() {
      return {
         todo: {
            text: '',
            isDone: false,
         },
      };
   },

   methods: {
      ...mapActions({
         addTodo: 'addTodo',
      }),

      sendTodo(todo) {
         if (this.todo.text.trim() !== '') {
            console.log(this.todo.text);
            this.todo.id = this.id;
            this.addTodo(todo);
            this.todo = {};
         }
      },
   },

   computed: {
      id() {
         return this.$store.getters.todos.length + 1;
      },
   },

   mounted() {
      this.$refs.inp.focus();
   },
};
</script>

<style lang="scss" scoped>
.todo {
   max-width: 100%;
   display: flex;
   margin-bottom: 15px;

   input {
      flex: 1 1 80%;
      padding: 5px;
      background-color: inherit;
      border: 1px solid #4caf50;
      border-right: none;
      transition: 0.5s;
      color: whitesmoke;

      &:focus {
         box-shadow: 0 0 7px aliceblue;
      }
      &::placeholder {
         color: #4caf50;
      }
   }

   button {
      flex: 1 1 20%;
      cursor: pointer;
      background-color: #4caf50;
      border: 1px solid #4caf50;
      padding: 5px;
      color: white;
      font-size: 16px;
      transition: all 0.3s ease 0s;

      &:hover {
         background-color: white;
         color: black;
         box-shadow: 0 0 5px aliceblue;
      }
   }
}
</style>
