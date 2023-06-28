<template>
   <ul
      class="list"
      v-for="todo in todos"
      :key="todo.id">
      <li :class="{ done: todo.isDone }">
         {{ upperCase(todo.text) }}
         <input
            type="checkbox"
            v-model="todo.isDone" />
      </li>

      <div class="box">
         <button
            class="trash pen"
            @click="changeTodo(todo.text)">
            <i class="fa-solid fa-pen"></i>
         </button>
         <button
            class="trash"
            @click="sendDeleteTodo(todo.id)">
            <i class="fa-sharp fa-trash"></i>
         </button>
      </div>
   </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
   name: 'TodoList',

   computed: {
      ...mapGetters(['todos']),
   },

   methods: {
      ...mapActions(['deleteTodo']),

      changeTodo(text) {
         console.log(text);
      },

      sendDeleteTodo(id) {
         this.deleteTodo(id);
      },

      upperCase(str) {
         return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      },
   },
};
</script>

<style lang="scss" scoped>
.list {
   padding-left: 10px;
   display: flex;
   justify-content: space-between;
   align-items: start;

   li {
      color: aliceblue;
      font-style: italic;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: 1px;
      line-height: 150%;
   }
}
.box {
   display: flex;
   gap: 10px;
   .trash {
      cursor: pointer;
      display: inline-block;
      background: none;
      border: none;
      padding: 5px;
      color: aliceblue;
      font-size: 17px;
      transition: all 0.3s ease-in-out 0s;

      &:hover {
         transform: scale(1.3);
         color: crimson;
      }
   }
   .pen {
      &:hover {
         color: cornflowerblue;
      }
   }
}

.done {
   text-decoration: line-through;
   color: red !important;
   opacity: 0.4;
}
</style>
