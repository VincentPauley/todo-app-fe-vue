<template>
  <b-nav tabs fill>
    <b-nav-item to="/" :active="homeRouteActive">Home</b-nav-item>
    <b-nav-item to="list" :active="listRouteActive">Todo List</b-nav-item>
    <b-nav-item to="about" :active="aboutRouteActive">About</b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from "bootstrap-vue";

export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    },
    homeRouteActive() {
      return this.currentRoute === "/";
    },
    listRouteActive() {
      return this.currentRoute === "/list";
    },
    aboutRouteActive() {
      return this.currentRoute === "/about";
    }
  },
  components: {
    BNav,
    BNavItem
  }
};
</script>