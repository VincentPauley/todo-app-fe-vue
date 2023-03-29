<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppHome/>
    <ListTodos/>
    <AddTodo/>
  </div>
</template>

<script>
import AppHome from "./components/AppHome.vue";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

export default {
  name: "App",
  components: {
    AppHome,
    AddTodo,
    ListTodos
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 60rem;
  margin: auto;
}
</style>
