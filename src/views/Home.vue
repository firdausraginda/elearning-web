<template>
  <div class="home">
    <v-container grid-list-md>
      <v-layout justify-center class="text-xs-center">
        <v-flex xs8>
          <h1 class="mt-4">Ayo Belajar Tentang ADDIE !</h1>
          <h4 class="my-5 px-5 second-color">
            <b> ADDIE merupakan </b> model pembelajaran yang disusun secara
            terprogram dengan urutan-urutan kegiatan yang sistematis dalam upaya
            pemecahan masalah belajar yang berkaitan dengan sumber belajar.
            -wikipedia
          </h4>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <template v-for="item in items">
          <v-flex xs6 md4 :key="item.title">
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
      <v-layout justify-center class="text-xs-center mt-1">
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
export default {
  name: "home",
  data() {
    return {
      items: [
        {
          title: "1. Introduction",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.."
        },
        {
          title: "2. Analysis",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.."
        },
        {
          title: "3. Design",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.."
        },
        {
          title: "4. Development",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.."
        },
        {
          title: "5. Implementation",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.."
        },
        {
          title: "6. Evaluation",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.."
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.hover-card:hover {
  cursor: pointer;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25) !important;
}
.primer-color {
  color: #018caa;
}
.rounded-card {
  border-radius: 15px !important;
}
h1 {
  font-size: 32px;
  color: #018caa;
}
h4 {
  font-weight: 400;
}
.second-color {
  color: #8f8f8f;
}
.text--secondary {
  line-height: 1.4;
}
</style>