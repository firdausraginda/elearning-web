<template>
  <div class="home">
    <v-container grid-list-md>
      <v-layout justify-center class="text-xs-center">
        <v-flex xs11 md8>
          <h1 class="mt-4 primer-color">Ayo Belajar Tentang ADDIE !</h1>
          <h4 class="my-5 px-3 second-color">
            <b> ADDIE merupakan </b> model pembelajaran yang disusun secara
            terprogram dengan urutan-urutan kegiatan yang sistematis dalam upaya
            pemecahan masalah belajar yang berkaitan dengan sumber belajar.
            -wikipedia
          </h4>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <template v-for="item in listADDIE">
          <v-flex xs12 md4 :key="item.title">
            <v-card
              class="elevation-0 px-2 py-0 rounded-card hover-card"
              @click="moveNext(item.idPage, 'card')"
            >
              <v-card-title justify-start>
                <div justify-start>
                  <div class="title primer-color">{{ item.title }}</div>
                  <div class="body-1 second-color mt-2">
                    {{ item.subtitle }}
                  </div>
                </div>
                <div class="is-show">
                  <v-btn
                    class="elevation-0 mt-2 mb-0 "
                    @click="moveNext(item.idPage, 'btn')"
                    >mulai</v-btn
                  >
                </div>
              </v-card-title>
            </v-card>
            <!-- <v-divider class="is-show" ></v-divider> -->
          </v-flex>
        </template>
      </v-layout>
      <v-layout justify-center class="text-xs-center my-2">
        <v-flex xs6 md2>
          <v-card
            class="elevation-0 rounded-card hover-card pa-3"
            target="blank"
            href="https://github.com/firdausraginda/elearning-web"
          >
            <div class="body-1 primer-color">Dev Mode</div>
            <div class="body-1 second-color">Lihat code web ini</div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { dataADDIE } from "../assets/addie.js";

export default {
  name: "home",
  data() {
    return {
      listADDIE: dataADDIE
    };
  },
  created() {},
  methods: {
    moveNext(page, component) {
      if (screen.width > 576 && component == "card") {
        this.$router.push({ path: `/infoTest/${page}` });
      } else if (screen.width <= 576 && component == "btn") {
        this.$router.push({ path: `/infoTest/${page}` });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.is-show {
  display: none;
}
.hover-card:hover {
  cursor: pointer;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25) !important;
}

.title {
  font-family: "Poppins", sans-serif !important;
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

@media (max-width: 576px) {
  h4 {
    margin: 15% 0 10% !important;
  }
  .is-show {
    display: block;
  }
  .v-divider {
    opacity: 1;
    margin: auto !important;
  }
  .hover-card:hover {
    box-shadow: none !important;
  }
  .v-btn {
    background-color: #08dba9 !important;
    color: white !important;
    border-radius: 30px;
    width: 100px;
    height: 35px;
    font-size: 14px;
    text-transform: capitalize;
    // letter-spacing: 1px;

    // font-weight: 500;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>