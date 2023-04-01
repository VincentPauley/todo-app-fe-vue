<template>
  <div>
    <FlexLeft>
      <FormLabel label="Body:" forID="todoBody"/>
    </FlexLeft>
    <b-form-textarea
      id="todoBody"
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
import FlexLeft from "./shared/FlexLeft";
import FormLabel from "./shared/FormLabel";

export default {
  components: { BButton, BFormTextarea, FlexLeft, FormLabel },
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
.cta-wrapper {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem 0;
  button {
    margin-left: 0.5rem;
  }
}
</style>