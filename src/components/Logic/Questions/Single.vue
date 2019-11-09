<template>
  <v-card flat outlined>
      <v-card-title>
          {{question.Question }}
      </v-card-title>
      <v-card-text>
                <v-radio-group v-model="answers" :mandatory="false">
                    <v-radio disabled :label="answer"  
                                v-for="(answer, i) in question.Answers" 
                                :key="i"
                                 :value="answer">
                                </v-radio>
                    
                </v-radio-group>
              
      </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    props: ['which'],
    data() {
        return {
            answers: 'A',
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