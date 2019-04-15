<template>
  <div class="button">
    <v-btn class="white--text elevation-0" @click="actions">{{ text }}</v-btn>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      text: {
        type: String,
        default: ''
      },
      to: {
        type: String,
        default: ''
      },
      idPage: {
        type: String,
        default: ''
      },
      typeBtn: {
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
        if (this.typeBtn == 'check') {
          let arr = []
          let counterBenar = 0
          for (var i = 1; i < 6; i++) {
            let retrievedAnswer = localStorage.getItem(`ans-pretest-${i}`);
            if (retrievedAnswer != null) {
              arr.push(retrievedAnswer)
            }
            else {
              alert('Silahkan lengkapi jawaban')
              return;
            }
          }
          for (var j = 0; j < 5; j++) {
            if (this.questions[j].jwbBenar == arr[j]) {
              counterBenar++
            }
          }
          console.log(counterBenar);
          this.$router.push({ path: `${this.to}/${this.idPage}` })
        } else if (this.typeBtn == 'link') {
          if (this.to.match('test')) {
            this.$router.push({ path: `${this.to}/${this.idPage}` })
          } else {
            this.$router.push({ path: `${this.to}` })
          }
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