<template>
  <div id="app">
    <b-jumbotron header="Todo App" lead="A sleak frontend for keeping track of stuff I need to do.">
      <p>
        Checkout the source code on
        <a
          target="_blank"
          href="https://github.com/VincentPauley/todo-app-fe-vue"
        >Github</a>
      </p>
    </b-jumbotron>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import { BJumbotron } from "bootstrap-vue";

import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    BJumbotron,
    NavBar
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
