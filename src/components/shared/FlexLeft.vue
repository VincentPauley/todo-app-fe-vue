<template>
  <div class="FlexLeft">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.FlexLeft {
  display: flex;
}
</style>


<script>
export default {
  data: () => ({})
};
</script>