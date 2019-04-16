<template>
  <div class="button">
    <v-btn class="white--text elevation-0" @click="actions">{{ text }}</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
      default: ''
    },
    questions: {
      type: Array,
      default: null
    }
  },
  methods: {
    actions() {
      if (this.btnType == "check") {
        let arr = [];
        let counterBenar = 0;
        let jwbSalah = [];
        for (var i = 1; i < 6; i++) {
          let retrievedAnswer = localStorage.getItem(
            `ans-${this.$route.params.testType}-${i}`
          );
          if (retrievedAnswer != null) {
            arr.push(retrievedAnswer);
          } else {
            alert("Silahkan lengkapi jawaban");
            return;
          }
        }
        for (var j = 0; j < 5; j++) {
          if (this.questions[j].jwbBenar == arr[j]) {
            counterBenar++;
          } else {
            jwbSalah.push(this.questions[j].id);
          }
        }
        let score = (counterBenar / 5) * 100;
        localStorage.setItem(`${this.$route.params.testType}-score`, score);
        localStorage.setItem(`jwb-salah`, JSON.stringify(jwbSalah));
        this.$router.push({ path: `${this.to}/${this.idPage}` });
      } else if (this.btnType == "nonCheck") {
        this.$router.push({ path: `${this.to}/${this.idPage}` });
      } else {
        this.$router.push({ path: `${this.to}` });
      }
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