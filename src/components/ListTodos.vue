<template>
  <div>
    <h3>List Todos</h3>
    <div v-if="fetchInProgress">
      <p>fetchInProgress...</p>
    </div>
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
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
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