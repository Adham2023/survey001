<template>
  <v-container style="overflow-x: auto; overflow-y: auto; height: 90vh;">
    <v-row>
      <v-col cols="6">
        <v-card flat outlined>
          <v-card-title class="grey--text">
            Question: 
            <v-select
                class="ml-5"
                :items="allQuestions"
                label=""
                v-model="question"
                outlined
              ></v-select>
          </v-card-title>
          <v-card-text>
            <component :is="currentQuestion" :isSkiping="false" child="false" parent="true" :which="question" />
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
             <component :is="skipToQuestion" :isSkiping="true" child="true" :parent="question" :which="skipQuestion" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <v-card flat outlined>
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
                    v-model="oprt"
                    @change="setOperator"
                    label="operators"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-title>
          <v-card-text>
          
          </v-card-text>
          <v-card-actions class="d-flex justify-center align-center">
            <v-btn @click="Apply" class="blue white--text">
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
import YesNo from './Questions/YesNo';
import Range from './Questions/Range';
import Txt from './Questions/Txt';
import Matrix from './Questions/Matrix';
import {mapActions} from 'vuex';
export default {
  components: {
    Multiple,
    Single,
    YesNo,
    Range,
    Txt,
    Matrix
  },
   data() {
    return {
      question: 0,
      oprt: '',
      questions: [],
      skipQuestion: 0,
      operators: [
        {text:'and', value: "&"},
        {text: 'or', value: '|'}, 
        {text: 'not', value: '!'}, 
        {text: 'equal', value: '='},
      ]
    }
  },
  methods: {
    ...mapActions(['CURRENT_QUESTION', 'SKIP_TO_QUESTION', 'OPERATOR', 'MAKE_RULE', 'SET_CONFIG_TO_QUESTION']),
    setOperator(e) {
      this.OPERATOR(this.oprt);
      console.log(this.oprt);
    },
    Apply() {
      // if(this.question !=0 && this.skipQuestion !=0) {
        this.MAKE_RULE();
        this.SET_CONFIG_TO_QUESTION();
        this.question=0;
        this.oprt = '';
        this.skipQuestion = 0;
        
      // }
    }
  },
  mounted() {
    this.questions = this.$store.state.newProject.Questions 
    console.log('Logic: ' , this.$store.state.newProject.Questions);
  },
 
  computed: {
    skipToQuestion() {
      if(this.skipQuestion) {
        this.SKIP_TO_QUESTION(this.skipQuestion);
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
              return 'Txt';
              break;
            case 4:
              return 'Range';
              break;
            case 5:
              return 'YesNo';
              break;
            case 6:
              return 'Matrix';
              break;
            
          }
      }
    },
    currentQuestion() {
      console.log('question: ', this.question);
      if(this.question) {
        this.CURRENT_QUESTION(this.question);
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
      let q =  this.questions.filter(e => e.Type !== 6 && e.Type !== 3 && e.Type != 4); // bu yerda mana text input, Range, Va MAtrix uchun logic skipni ishlatmaslik uchun atdim
      console.log('q: ', q);
      return q.map(e => {
        return {
          text: 'Question ' + e.Number,
          value: e.Number
        }
      })
    },
    SkipToQuestions() {
      let q =  this.questions;
      return q.slice(this.question, q.length).map(e => {
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