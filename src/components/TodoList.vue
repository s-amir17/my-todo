<template>
   <transition-group name="list">
      <ul class="todo-list" v-for="(todo, index) in todos" :key="todo.id">
         <li :class="{ done: todo.isDone }">
            {{ upperCase(todo.text) }}
            <input type="checkbox" v-model="todo.isDone" />
         </li>

         <button class="trash" @click="$emit('removeTodo', todo.id)">
            <i class="fa-sharp fa-trash"></i>
         </button>
      </ul>
   </transition-group>
</template>

<script>
export default {
   name: 'TodoList',

   props: {
      todos: {
         type: Array,
         default: () => [],
      },
   },

   methods: {
      upperCase(str) {
         if (str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
         }
      },
   },
};
</script>

<style lang="scss" scoped>
//? transition group
.list-item {
   display: inline-block;
   margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
   transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateX(250px);
}
//? transition group

.todo-list {
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 10px;
   margin-bottom: 5px;

   li {
      flex: 1 0 95%;
      width: 450px;
      display: inline-flex;
      align-items: end;
      padding: 10px;
      border-radius: 10px;
      background-color: gray;
      justify-content: space-between;
      color: aliceblue;
      font-style: italic;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: 1px;
      line-height: 120%;
      word-wrap: break-word;
   }

   .trash {
      flex: 0 1 5%;
      cursor: pointer;
      display: inline-block;
      background: none;
      border: none;
      color: aliceblue;
      font-size: 17px;
      transition: all 0.3s ease-in-out 0s;

      &:hover {
         transform: scale(1.3);
         color: crimson;
      }
   }
}
.done {
   text-decoration: line-through;
   color: red !important;
   opacity: 0.4;
}
</style>
