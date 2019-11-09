<template>
  <v-card flat outlined>
      <v-card-title>
          {{question.Question +' ' + which}}
      </v-card-title>
      <v-card-text>
              <v-checkbox 
                            v-model="answers" 
                            :value="answer" 
                            :label="answer"
                            v-for="(answer, i) in question.Answers"
                            :key="i"
                ></v-checkbox>
              
      </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    props: ['which'],
    data() {
        return {
            answers: [],
        }
    },
    computed: {
        question() {
            return this.$store.getters.getQuestion(this.which);
        }
    }

}
</script>

<style>

</style>