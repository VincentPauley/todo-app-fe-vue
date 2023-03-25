<template>
  <div>
    <div class="header-wrapper">
      <h3>New Todo</h3>
    </div>
    <b-form-textarea
      id="textarea"
      v-model="todoBody"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <div class="cta-wrapper">
      <b-button variant="outline-primary" @click="addNewTodo">Add</b-button>
      <b-button variant="outline-danger" @click="clearTodo">Clear</b-button>
    </div>
  </div>
</template>

<script>
import { BButton, BFormTextarea } from "bootstrap-vue";

export default {
  components: { BButton, BFormTextarea },
  data: () => ({
    todoBody: ""
  }),
  methods: {
    addNewTodo() {
      console.log("Add Todo: ", this.todoBody);
    },
    clearTodo() {
      this.todoBody = "";
    }
  }
};
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
}
.cta-wrapper {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem 0;
  button {
    margin-left: 0.5rem;
  }
}
</style>