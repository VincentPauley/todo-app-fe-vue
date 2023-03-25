<template>
  <div>
    <h1>Home</h1>
    <p>{{todoCount}}</p>
    <p>{{ count }}</p>
    <p>{{text}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    text: ""
  }),
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