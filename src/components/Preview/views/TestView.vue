<template>
  <v-container class="" height="80vh">
    <v-row justify="center" >
      <v-col cols="6" >
        <v-card flat height="400px">
          <v-card-text>
            <component :is="'Multiple'" />
          </v-card-text>
        </v-card>
        
      </v-col>
    </v-row>
    <v-row justify="center" class="" >
      <v-col cols="1" class="">
        <v-btn @click="Next" text class="primary white--text">
          <span>Next</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import Matrix from './TestViewComponents/Matrix';
import Multiple from './TestViewComponents/Multiple';
import Radio from './TestViewComponents/Radio';
import Range from './TestViewComponents/Range';
import Text from './TestViewComponents/Text';
import YesNo from './TestViewComponents/YesNo';

export default {
    components: {
      Matrix,
      Multiple,
      Radio,
      Range,
      Text,
      YesNo
    },
    mounted() {
      this.Project = this.$store.state.newProject.Project;
      console.log('TestView: ', this.$store.state.newProject.Project);
      this.QLength = this.Project[0].Questions.length;
      this.Question(1);
    },
    data() {
      return {
        Project: [],

        Q: null,
        QLength: null,
        currentQuestionType: '',
        currentQuestionNumber: 0,
      }
    },
    computed: {
        Questions() {
          return this.Project[0].Questions;
        }
    },
    methods: {
      Next() {
        this.currentQuestionNumber++;
      },
      Question(n) {
        let Q = this.Project[0].Questions[n];
        let MyConfig = Q.config;
        if(MyConfig.isParent == true) {
          return n;
        } else {
          let P_A = this.myParentAnswer(MyConfig.isParent, MyConfig.Rule);
          while(P_A == false && n < this.QLength) {
            n++;
            Q = this.Project[0].Questions[n];
            MyConfig  = Q.config;
            P_A = this.myParentAnswer(MyConfig.isParent, MyConfig.Rule);
          }
          return n;
        }
      },
      init(ss) {
        console.log(ss);
      },
      getAnswerOf(parent) {

      },
      myParentAnswer(Parent, Rule) { // this will return Answers for a Asked child
        let P_Answer = this.getAnswerOf(Parent);
        switch (Rule[0]) {
          
          case '=': 
            let equalTo = Rule.slice(1, Rule.length).split(',');
              if(P_Answer.length == 1 && P_Answer.includes(required[i]))
                  return true;
              return false;
          case '&':
            let required = Rule.slice(1, Rule.length).split(',');
            for(let i = 0; i < required.length; i++) {
              if(!P_Answer.includes(required[i]))
                  return false;
            }
            return true;
          break;
          case '|':
            let atleast = Rule.slice(1, Rule.length).split(',');
            for(let i = 0; i < atleast.length; i++) {
              if(P_Answer.includes(atleast[i]))
                  return true;
            }
            return false;
          case '!':
            let none = Rule.slice(1, Rule.length).split(',');
            for(let i = 0; i < none.length; i++) {
              if(P_Answer.includes(none[i]))
                  return false;
            }
            return true;
          default:
            break;
        }
        return // Answer
      }
    },
}
</script>

<style>

</style>