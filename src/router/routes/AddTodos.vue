<template>
  <ContentSection header="Add Todos">
    <AddTodo/>
  </ContentSection>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection";
import AddTodo from "@/components/AddTodo";

export default {
  components: {
    ContentSection,
    AddTodo
  }
};
</script>