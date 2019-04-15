<template>
  <div class="question">
    <div class="question-text second-color text-xs-left mb-4">
      <span>{{ idQuestion }}.</span> {{ textQuestion }}
    </div>
    <div>
      <v-layout wrap>
        <v-radio-group
          class="ma-0 pa-0"
          v-model="radios"
          @change="radioAnswer(radios, idQuestion)"
          :mandatory="true"
          v-for="ans in answersQuestion"
          :key="ans"
        >
          <v-flex md12>
            <v-radio :label="ans" :value="ans" color="#018caa"></v-radio>
          </v-flex>
        </v-radio-group>
      </v-layout>
      <v-divider color="#FAFAFA"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radios: ""
    };
  },
  props: {
    idQuestion: {
      type: Number,
      default: 0
    },
    textQuestion: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, graece alterum persequeris quout, cum altera prompta suscipiantur ne. Ei doctus constituam has, elitr meliore vis eu. Sumo lucilius consulatu vel et. Nam ea elit contentiones. Prima delicatissimi ?"
    },
    answersQuestion: {
      type: Array,
      default: function() {
        return ["pil-1", "pil-2", "pil-3", "pil-4"];
      }
    }
  },
  methods: {
    radioAnswer(ans, id) {
      localStorage.setItem(`ans-pretest-${id}`, ans);
    }
  }
};
</script>

<style lang="scss" scoped>
.question-text {
  font-size: 18px;
}

.v-divider {
  opacity: 0.5;
}
</style>