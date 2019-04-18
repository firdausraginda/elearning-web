<template>
  <div class="test">
    <v-container>
      <v-layout justify-center wrap>
        <v-flex xs12 md8>
          <Breadcrumbs class="mt-3 mx-5" :journey="settingJourney()" />
        </v-flex>
        <v-flex xs12 md8>
          <h1 class="mt-4 mb-3 primer-color text-xs-center">{{ testType }}</h1>
        </v-flex>
        <v-flex xs12 md8>
          <div v-for="question in questions" :key="question.id">
            <Question
              :idQuestion="question.id"
              :textQuestion="question.text"
              :answersQuestion="question.jwb"
              class="my-4 px-5 question"
            />
          </div>
        </v-flex>
        <v-flex xs12 md8>
          <Btn
            :questions="questions"
            class="text-xs-center mb-3 mt-3 btn-custom"
            text="Selesai"
            btnType="check"
            :to="moveTo"
            :idPage="idPage"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";
import Question from "../components/Question";
import Btn from "../components/Button";
import dataQuestions from "../assets/questions.json";

export default {
  data() {
    return {
      moveTo: `/resultTest/${this.$route.params.testType}`,
      testType: this.$route.params.testType,
      questions: null,
      idPage: this.$route.params.idPage
    };
  },
  components: {
    Breadcrumbs,
    Question,
    Btn
  },
  created() {
    this.getQuestions();
    this.clearLocalStorage();
  },
  methods: {
    getQuestions() {
      dataQuestions.forEach(el => {
        if (el.title == this.$route.params.idPage) {
          this.questions = el.content;
        }
      });
    },
    clearLocalStorage() {
      localStorage.clear();
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
h1 {
  text-transform: capitalize;
}
@media (max-width: 576px) {
  .breadcrumbs {
    margin: 6% !important;
  }
  .question {
    padding: 0 6% !important;
  }
  .btn-custom{
    margin-bottom: 8% !important;
  }
}
</style>
