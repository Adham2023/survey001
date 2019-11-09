<template>
  <v-card flat outlined>
      <v-card-title>
          {{question.Question }}
      </v-card-title>
      <v-card-text v-if="!isSkiping">
                <v-radio-group v-model="answers" :mandatory="false" @change="Answered">
                    <v-radio :label="answer"  
                                v-for="(answer, i) in question.Answers" 
                                :key="i"
                                 :value="answer">
                                </v-radio>
                </v-radio-group>
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
            answers: '',
        }
    },
    computed: {
        question() {
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