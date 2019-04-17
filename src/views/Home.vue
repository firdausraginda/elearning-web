<template>
  <div class="home">
    <v-container grid-list-md>
      <v-layout justify-center class="text-xs-center">
        <v-flex xs8>
          <h1 class="mt-4 primer-color">Ayo Belajar Tentang ADDIE !</h1>
          <h4 class="my-5 px-5 second-color">
            <b> ADDIE merupakan </b> model pembelajaran yang disusun secara
            terprogram dengan urutan-urutan kegiatan yang sistematis dalam upaya
            pemecahan masalah belajar yang berkaitan dengan sumber belajar.
            -wikipedia
          </h4>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <template v-for="item in listADDIE">
          <v-flex xs12 md4 :key="item.title" @click="moveNext(item.idPage)">
            <v-card class="elevation-0 px-2 py-2 rounded-card hover-card">
              <v-card-title justify-start>
                <div justify-start>
                  <div class="title primer-color">{{ item.title }}</div>
                  <div class="body-1 second-color mt-2">
                    {{ item.subtitle }}
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
      <v-layout justify-center class="text-xs-center my-2">
        <v-flex xs6 md2>
          <v-card class="elevation-0 rounded-card hover-card pa-3" target="blank" href="https://github.com/firdausraginda/elearning-web">
            <div class="body-1 primer-color">Dev Mode</div>
            <div class="body-1 second-color">Lihat code web ini</div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { dataADDIE } from '../assets/addie.js'

  export default {
    name: "home",
    data() {
      return {
        listADDIE: dataADDIE
      };
    },
    created() {
    },
    methods: {
      moveNext(page){
        this.$router.push({path: `/infoTest/${page}`})
      }
    }
  };
</script>

<style lang="scss" scoped>
  .hover-card:hover {
    cursor: pointer;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25) !important;
  }

  .rounded-card {
    border-radius: 15px !important;
  }

  h1 {
    font-size: 32px;
  }

  h4 {
    font-weight: 400;
  }

  .text--secondary {
    line-height: 1.4;
  }
</style>