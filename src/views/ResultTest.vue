<template>
  <div class="result-test">
    <v-container>
      <v-layout justify-center wrap>
        <v-flex xs12 md8>
          <Breadcrumbs class="mt-3 mx-5" :journey="settingJourney()" />
        </v-flex>
        <v-flex xs12 md8>
          <div class="subheading second-color text-xs-center my-4">
            Nilai Kamu
          </div>
        </v-flex>
        <v-flex xs12 md8>
          <div class="rounded-score green-border" v-if="score > 50">
            <v-layout align-center justify-center fill-height>
              <div class="score green-color">{{ score }}</div>
            </v-layout>
          </div>
          <div class="rounded-score red-border" v-else>
            <v-layout align-center justify-center fill-height>
              <div class="score red-color">{{ score }}</div>
            </v-layout>
          </div>
        </v-flex>
        <v-flex xs12 md5>
          <div
            class="subheading second-color text-xs-center mt-5 mb-3 pt-3"
            v-if="this.$route.params.testType == 'pre-test'"
          >
            Selamat untuk nilai yang kamu dapat! Apakah sudah siap untuk
            belajar?
          </div>
          <div
            class="subheading second-color text-xs-center mt-5 mb-3 pt-3"
            v-else
          >
            Selamat untuk nilai yang kamu dapat !
          </div>
        </v-flex>
        <v-flex xs12 md8>
          <Btn
            class="text-xs-center"
            :text="textProps"
            :btnType="settingBtnType()"
            :to="toProps"
            :idPage="idPage"
          />
        </v-flex>
        <v-flex xs12 md8 v-if="score != 100 && this.$route.params.testType == 'post-test'">
          <div class="subheading mx-5 red-color mt-4">
            Koreksi jawaban yang salah
          </div>
        </v-flex>
        <v-flex xs12 md8 v-if="this.$route.params.testType == 'post-test'">
          <div v-for="question in dataQuestionsSalah" :key="question.id">
            <Question
              :idQuestion="question.id"
              :textQuestion="question.text"
              :correctAnswer="question.jwbBenar"
              class="mt-4 mb-3 px-5"
            />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";
import Btn from "../components/Button";
import Question from "../components/Question";
import dataQuestions from "../assets/questions.json";

export default {
  data() {
    return {
      score: 0,
      idPage: this.$route.params.idPage,
      questionsAll: null,
      dataQuestionsSalah: [],
      toProps: null,
      textProps: null
    };
  },
  components: {
    Breadcrumbs,
    Btn,
    Question
  },
  created() {
    this.getQuestions();
    this.getScore();
  },
  methods: {
    getQuestions() {
      dataQuestions.forEach(el => {
        if (el.title == this.$route.params.idPage) {
          this.questionsAll = el.content;
        }
      });
      let arraySalah = JSON.parse(localStorage.getItem(`jwb-salah`));
      this.questionsAll.forEach(el => {
        if (arraySalah.includes(el.id)) {
          this.dataQuestionsSalah.push(el);
        }
      });
    },
    getScore() {
      if (this.$route.params.testType == "pre-test") {
        this.score = localStorage.getItem(`pre-test-score`);
      } else {
        this.score = localStorage.getItem(`post-test-score`);
      }
    },
    settingBtnType() {
      if (this.$route.params.testType == "pre-test") {
        this.toProps = "/content";
        this.textProps = "Siap!";
        return "nonCheck";
      } else {
        this.toProps = "/";
        this.textProps = "Selesai";
        return "finish";
      }
    },
    settingJourney() {
      if (this.$route.params.testType == "pre-test") {
        return [
          {
            text: this.$route.params.idPage,
            disabled: false,
            href: "/"
          },
          {
            text: this.$route.params.testType,
            disabled: true,
            href: "test"
          }
        ];
      } else {
        return [
          {
            text: this.$route.params.idPage,
            disabled: false,
            href: "/"
          },
          {
            text: "Pre-Test",
            disabled: false,
            href: `/test/Pre-Test/${this.$route.params.idPage}`
          },
          {
            text: "Belajar",
            disabled: false,
            href: `/content/${this.$route.params.idPage}`
          },
          {
            text: "Post-Test",
            disabled: true,
            href: ""
          }
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.green-border {
  border-color: #08dba9 !important;
}
.red-border {
  border-color: #f08080 !important;
}
.title {
  font-family: "Poppins", sans-serif !important;
  font-weight: 400 !important;
}
.rounded-score {
  margin: auto;
  width: 238px;
  height: 238px;
  border-radius: 50%;
  border: 2px solid;
  box-sizing: border-box;
}
.score {
  font-weight: 300;
  font-size: 72px;
}
</style>