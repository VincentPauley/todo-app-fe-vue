<template>
  <div>
    <h1>Home</h1>
    <p>{{todoCount}}</p>
    <p>{{ count }}</p>
    <button @click="addNewTodo">Add Todo</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      addTodo: "Todos/addTodo"
    }),
    addNewTodo() {
      this.addTodo("something new");
    }
  },
  computed: {
    ...mapGetters({ count: "Todos/count" }),
    todoCount() {
      return 15;
    }
  }
};
</script>