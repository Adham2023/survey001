<template>
  <v-container style="overflow-x: auto; overflow-y: auto; height: 90vh;">
    <v-row>
      <v-col cols="6">
        <v-card flat outlined>
          <v-card-title class="grey--text">
            Question: {{question}}
            <v-select
                class="ml-5"
                :items="allQuestions"
                label=""
                v-model="question"
                outlined
              ></v-select>
          </v-card-title>
          <v-card-text>
            <component :is="'Multiple'" :which="question" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card flat outlined>
          <v-card-title class="grey--text">
            Skip To: 
             <v-select
                class="ml-5" 
                :items="SkipToQuestions"
                label=""
                v-model="skipQuestion"
                outlined
              ></v-select>
          </v-card-title>
          <v-card-text>
             <component :is="skipToQuestion" :which="skipQuestion" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <v-card flat>
          <v-card-title class="grey--text">
            <v-container>
              <v-row justify="start">
                <v-col cols="2">
                  Operator: 
                </v-col>
                <v-col cols="2">
                  <v-select
                    :items="operators"
                    outlined
                    label="operators"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-title>
          <v-card-text>
          
          </v-card-text>
          <v-card-actions class="d-flex justify-center align-center">
            <v-btn class="blue white--text">
              <span>Apply</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      
    </v-row>
  </v-container>
</template>

<script>
import Multiple from './Questions/Multiple';
import Single from './Questions/Single';
import Text from './Questions/Text';
import YesNo from './Questions/YesNo';
import Range from './Questions/Range';
export default {
  components: {
    Multiple,
    Single,
    Text,
    YesNo,
    Range
  },
  mounted() {
    this.questions = this.$store.getters.allQuestions;
  },
  data() {
    return {
      question: 0,
      questions: [],
      skipQuestion: 0,
      operators: ['AND', 'OR', 'NOT', 'EQUAL']
    }
  },
  computed: {
    skipToQuestion() {
      if(this.skipQuestion) {
        let questionType = this.questions.find(i => i.Number == this.skipQuestion).Type;
        console.log(questionType);
          switch(questionType) {
            case 1:
              return 'Multiple';
              break;
            case 2:
              return 'Single';
              break;
            case 3:
              return 'Text';
              break;
            case 4:
              return 'Range';
              break;
            case 5:
              return 'YesNo';
              break;
            
          }
      }
    },
    currentQuestion() {
      if(this.question) {
        let questionType = this.questions.find(i => i.Number == this.question).Type;
        console.log(questionType);
          switch(questionType) {
            case 1:
              return 'Multiple';
              break;
            case 2:
              return 'Single';
              break;
            case 3:
              return 'Text';
              break;
            case 4:
              return 'Range';
              break;
            case 5:
              return 'YesNo';
              break;
            
          }
      }
    },
    allQuestions() {
      return this.questions.map(e =>  {
        return { 
          text: 'Question ' + e.Number, 
          value: e.Number
        }
      })
    },
    SkipToQuestions() {
      return this.questions.slice(this.question, this.questions.length).map(e => {
        return {
          text: 'Question ' + e.Number,
          value: e.Number 
        }
      });
    }
  }
}
</script>

<style>

</style>