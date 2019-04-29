<template>
  <div class="content">
    <v-container>
      <v-layout justify-center wrap>
        <v-flex xs12 md8>
          <Breadcrumbs class="mt-3 mx-5" :journey="journey" />
        </v-flex>
        <v-flex xs12 md8>
          <iframe
            class="ma-5"
            width="650"
            height="315"
            :src="urlVideo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
        <v-flex xs12 md8>
          <!-- <Btn
            class="text-xs-center"
            text="Selesai"
            btnType="nonCheck"
            to="/test/post-test"
            :idPage="this.$route.params.idPage"
          /> -->
          <Btn 
            class="text-xs-center"
            text="Selesai"
            @click.native="moveBtn()"          
          />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";
import Btn from "../components/Button";
import { dataADDIE } from "../assets/addie.js";

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
          text: "pre-test",
          disabled: false,
          href: `/test/pre-test/${this.$route.params.idPage}`
        },
        {
          text: "belajar",
          disabled: true,
          href: "/"
        }
      ],
      urlVideo: ""
    };
  },
  components: {
    Breadcrumbs,
    Btn
  },
  created() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      dataADDIE.forEach(el => {
        if (el.idPage == this.$route.params.idPage) {
          this.urlVideo = el.video;
        }
      });
    },
    moveBtn(){
      this.$router.push({path: `/test/post-test/${this.$route.params.idPage}`})
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  .breadcrumbs {
    margin: 6% 0 !important;
  }
  iframe {
    margin: 6% 0 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
  .button {
    margin-top: 20% !important;
  }
}
</style>