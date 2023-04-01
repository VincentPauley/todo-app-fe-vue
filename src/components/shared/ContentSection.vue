<template>
  <div class="content-section">
    <h2>{{ header }}</h2>
    <slot/>
  </div>
</template>

<style lang="scss">
.content-section {
  padding: 2rem 0;
}
</style>

<script>
export default {
  props: {
    header: {
      type: String,
      default: "[SET HEADER]"
    }
  }
};
</script>