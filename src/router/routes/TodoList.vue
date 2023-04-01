<template>
  <div>
    <h2>You have [#?] Todods</h2>
    <p>[filters]/[search]</p>
    <ListTodos/>
  </div>
</template>

<script>
import ListTodos from "@/components/ListTodos";

export default {
  components: {
    ListTodos
  }
};
</script>
