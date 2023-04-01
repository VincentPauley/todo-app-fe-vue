<template>
  <div>
    <h1>Home</h1>
    <p>{{ count }}</p>
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
    ...mapGetters({ count: "Todos/count" })
  }
};
</script>