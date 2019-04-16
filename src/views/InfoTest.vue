<template>
  <div class="infoTest">
    <v-container fill-height>
      <v-layout justify-center align-center>
        <v-flex md4>
          <div class="second-color subheading text-xs-center mb-4">
            Sebelum mulai belajar, silahkan isi pre-test terlebih dahulu
          </div>
          <btn class="text-xs-center" text="Mulai" :isCheck=false to="/test/pre-test" :idPage="idPage"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Btn from '../components/Button'

  export default {
    data() {
      return {
        idPage: this.$route.params.idPage
      }
    },
    components: {
      Btn
    }
  };
</script>

<style lang="scss" scoped>
  .infoTest {
    height: 90vh;
  }

  .subheading {
    font-family: "Poppins", sans-serif !important;
    font-weight: lighter;
    line-height: 1.5 !important;
  }
</style>