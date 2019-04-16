<template>
  <div class="test">
    <v-container>
      <v-layout justify-center wrap>
        <v-flex md8>
          <Breadcrumbs class="mt-3 mx-5" :journey="journey" />
        </v-flex>
        <v-flex md8>
          <h1 class="mt-4 mb-3 primer-color text-xs-center">{{ testType }}</h1>
        </v-flex>
        <v-flex md8>
          <div v-for="question in questions" :key="question.id">
            <Question
              :idQuestion="question.id"
              :textQuestion="question.text"
              :answersQuestion="question.jwb"
              class="my-4 px-5"
            />
          </div>
        </v-flex>
        <v-flex md8>
          <Btn
            :questions="questions"
            class="text-xs-center mb-3 mt-3"
            text="Selesai"
            :isCheck=true
            to="/resultTest/pre-test"
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
      testType: this.$route.params.testType,
      journey: [
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
      ],
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
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
}
</style>
