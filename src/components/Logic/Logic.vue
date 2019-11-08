<template>
      <v-container class="fill-height" >
        <v-row justify="center">
          <v-col cols="auto">
            <span class="title grey--text" style="text-transform:uppercase">
              Logical Connections between Questions
            </span>
          </v-col>
        </v-row>
        <v-row>
          <!-- Before Question -->
          <v-col>
            <v-card flat>
              <v-card-title>
                For Question:
                <v-spacer></v-spacer>
                <v-select
                  label="Questions"
                  :items="AllQs"
                  v-model="forQuestion"
                  >
                </v-select>
              </v-card-title>
              <v-card-text>
                  <Multiple which="1" />
                  <p>IF</p>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- Current Question -->
          <v-col > 
            <v-card flat>
              <v-card-title>
                Skip To:
                <v-spacer></v-spacer>
                <v-select
                  label="Questions"
                  :items="AllQs"
                  v-model="currentQuestion"
                  >
                </v-select>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import Multiple from './Questions/Multiple';
export default {
      components: {
        Multiple
      },
      data() {
        return {
          currentQuestion: 0, 
          berforeQuestion: 0,
          forQuestion: 0,
          questions: [],
        }
      },
      mounted() {
        this.questions = this.$store.getters.allQuestions
      },
      computed: {
       AllQs() {
         return this.questions.map(e =>  e.Number );
       },
       nextQuestions() {
         return this.questions.slice( this.forQuestion, this.questions.length).map(e => 'Question ' +  e.Number);
       }
      },
      
}
</script>

<style>

</style>