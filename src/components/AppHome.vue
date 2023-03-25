<template>
  <div>
    <h1>Home</h1>
    <p>{{todoCount}}</p>
    <p>{{ count }}</p>
    <p>{{text}}</p>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button variant="outline-primary" @click="addNewTodo">Add</b-button>
  </div>
</template>

<script>
import { BButton, BFormTextarea } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { BButton, BFormTextarea },
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