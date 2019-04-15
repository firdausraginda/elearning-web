<template>
  <div class="result-test">
    <v-container>
      <v-layout justify-center wrap>
        <v-flex md8>
          <Breadcrumbs class="mt-3 px-5" :journey="journey" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";

export default {
  data() {
    return {
      journey: [
        {
          text: this.$route.params.idPage,
          disabled: false,
          href: "/"
        },
        {
          text: "Pre-Test",
          disabled: true,
          href: "test"
        }
      ]
    };
  },
  components: {
    Breadcrumbs
  }
};
</script>

<style lang="scss" scoped>
</style>
