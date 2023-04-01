<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NavBar/>
    <router-view/>
    <AddTodo/>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
    AddTodo
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
