<template>
  <div class="button">
    <v-btn class="white--text elevation-0" @click="actions">{{ text }}</v-btn>
  </div>
</template>

<script>
import dataJmlQuestion from "../assets/questions.json";

export default {
  data() {
    return {
      jmlQuestion: 0,
      jwbanUser: [],
      jwbSalah: []
    };
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    },
    idPage: {
      type: String,
      default: ""
    },
    btnType: {
      type: String,
      default: ""
    },
    questions: {
      type: Array,
      default: null
    }
  },
  created() {},
  methods: {
    actions() {
      if (this.btnType == "check") {
        this.countQuestion();
        let isCompleteAnswer = this.getJwbanUser();
        if (isCompleteAnswer == false) {
          return;
        } else {
          this.itungScore();
          this.moveDynamic();
        }
      } else if (this.btnType == "nonCheck") {
        this.moveDynamic();
      } else {
        this.$router.push({ path: `${this.to}` });
      }
    },
    countQuestion() {
      dataJmlQuestion.forEach(el => {
        if (el.title == this.$route.params.idPage) {
          this.jmlQuestion = el.content.length;
        }
      });
    },
    getJwbanUser() {
      for (var i = 0; i < this.jmlQuestion; i++) {
        let retrievedAnswer = localStorage.getItem(
          `ans-${this.$route.params.testType}-${i + 1}`
        );
        if (retrievedAnswer != null) {
          this.jwbanUser.push(retrievedAnswer);
        } else {
          alert("Silahkan lengkapi jawaban");
          this.jwbanUser = [];
          return false;
        }
      }
      return true;
    },
    itungScore() {
      let counterBenar = 0;

      for (var i = 0; i < this.jmlQuestion; i++) {
        if (this.questions[i].jwbBenar == this.jwbanUser[i]) {
          counterBenar++;
        } else {
          this.jwbSalah.push(this.questions[i].id);
        }
      }

      let score = (counterBenar / this.jmlQuestion) * 100;
      localStorage.setItem(`${this.$route.params.testType}-score`, score);
      localStorage.setItem(`jwb-salah`, JSON.stringify(this.jwbSalah));
    },
    moveDynamic() {
      this.$router.push({ path: `${this.to}/${this.idPage}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  background-color: #08dba9 !important;
  border-radius: 30px;
  font-size: 16px;
  font-weight: lighter;
  width: 130px;
  height: 40px;
  text-transform: capitalize;
}
</style>