<template>
  <div class="button">
    <v-btn class="white--text elevation-0">{{ text }}</v-btn>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      text: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  .v-btn {
    background-color: #08dba9 !important;
    border-radius: 30px;
    font-size: 16px;
    font-weight: lighter;
    width: 130px;
    height: 40px;
    text-transform: capitalize;
  }
</style>