<template>
  <div class="breadcrumbs">
    <v-breadcrumbs class="breadcrumbds-items" :items="journey" divider=">"></v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      journey: {
        type: Array,
        default: function () {
          let journey = [
            {
              text: "Dashboard",
              disabled: false,
              href: "breadcrumbs_dashboard"
            },
            {
              text: "Link 1",
              disabled: false,
              href: "breadcrumbs_link_1"
            },
            {
              text: "Link 2",
              disabled: true,
              href: "breadcrumbs_link_2"
            }
          ]
          return journey
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .breadcrumbds-items {
    padding: 0 !important;
    text-transform: capitalize;
  }
</style>