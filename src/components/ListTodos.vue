<template>
  <div>
    <h3>List Todos</h3>
    <LoadingSpinner v-if="fetchInProgress"/>
    <b-list-group v-else>
      <b-list-group-item v-for="(todo, i) in todos" :key="i">
        <p>{{ todo.title }}</p>
        <p>{{ todo.author }} {{ todo.created }}</p>
        <p>{{ todo.body }}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import LoadingSpinner from "./shared/LoadingSpinner";
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    LoadingSpinner,
    BListGroup,
    BListGroupItem
  },
  computed: {
    ...mapGetters({
      fetchInProgress: "Todos/fetchInProgress",
      todos: "Todos/todos"
    })
  },
  methods: {
    ...mapActions({
      fetchTodos: "Todos/fetchTodos"
    })
  },
  created() {
    this.fetchTodos();
  }
};
</script>