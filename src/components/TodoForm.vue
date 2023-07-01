<template>
   <form class="todo" @click.prevent>
      <input v-model="todo.text" ref="inp" type="text" required placeholder="your todo . . ." />
      <button @click="sendTodo">Add todo</button>
   </form>
</template>

<script>
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
      sendTodo() {
         if (this.todo.text.trim() === '') return;

         this.todo.id = Math.random();
         this.$emit('addTodo', this.todo);
         this.todo = {
            text: '',
            isDone: false,
         };
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
