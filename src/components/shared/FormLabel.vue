<template>
  <label :for="forID">{{label}}</label>
</template>

<script>
export default {
  props: {
    label: String,
    forID: String
  }
};
</script>

