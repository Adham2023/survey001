<template>
  <v-card flat outlined>
      <v-card-title>
          {{question.Question +' ' + which}}
      </v-card-title>
      <v-card-text v-if="!isSkiping">
              <v-checkbox 
                            v-model="answers" 
                            @change="Answered"
                            :value="answer" 
                            :label="answer"
                            v-for="(answer, i) in question.Answers"
                            :key="i"
                ></v-checkbox>
              
      </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    props: {
        which: {
            type: Number
        },
        isSkiping: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            answers: [],
        }
    },
    computed: {
        question() {
            console.log('sdf', this.$store.getters.getQuestion(this.which))
            return this.$store.getters.getQuestion(this.which);
        }
    },
    methods: {
        ...mapActions(['ANSWERS']),
        Answered(e) {
            console.log(e);
            this.ANSWERS(e);
        }
    }

}
</script>

<style>

</style>