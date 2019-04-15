<template>
  <div class="test">
    <v-container>
      <v-layout justify-center>
        <v-flex md6>
          <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
