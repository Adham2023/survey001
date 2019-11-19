<template>
  <v-container class="" height="80vh" >
    <v-row justify="center" >
      <v-col cols="6" >
        <v-card flat height="400px" width="600px" style="overflow-x: auto; overflow-y: auto;">
          <v-card-text>
            <component ref="childAnswer" :is="currentQuestion" :myNumber="myNumber"/>
          </v-card-text>
        </v-card>
        
      </v-col>
    </v-row>
    <v-row justify="center" class="" >
      <v-col cols="1" class="">
        <v-btn @click="Next"  text class="primary white--text">
          <span>Next</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Matrix from './TestViewComponents/Matrix';
import Multiple from './TestViewComponents/Multiple';
import Single from './TestViewComponents/Radio';
import Range from './TestViewComponents/Range';
import Txt from './TestViewComponents/Txt';
import YesNo from './TestViewComponents/YesNo';
import Thanks from './TestViewComponents/Thanks';
import {currentCompontMixin} from './TestViewComponents/mixins/getCurrentCompoent';
import {getQuestionMixin} from './TestViewComponents/mixins/getQuestion';
import {ruleCheck} from './TestViewComponents/mixins/ruleCheck';
export default {
  mixins: [currentCompontMixin, getQuestionMixin, ruleCheck],
    components: {
      Matrix,
      Multiple,
      Single,
      Range,
      Txt,
      YesNo,
      Thanks
    },
    mounted() {
      this.Type = this.$store.state.newProject.Questions[this.numOfCurrentQuestion].Type;
      this.myNumber = this.$store.state.newProject.Questions[this.numOfCurrentQuestion].Number;
      this.currentQuestion = this.currentComponent(this.Type);
      this.Question = this.$store.state.newProject.Questions[this.numOfCurrentQuestion]
      console.log("Q", this.Question);
    console.log("SQ:", this.$store.state.newProject.Questions[this.numOfCurrentQuestion]);
    },
    data() {
      return {
        Question: null,
        currentQuestion: '',
        numOfCurrentQuestion: 0,
        myNumber: 1, // this will send to corresponding component
        Type:1, 
      }
    },
    computed: {
        ...mapState({
          Questions: state => state.newProject.Questions
        })
    },
    methods: {

      Next() {
        // if there is no rule go next question else check for rule 
        if(this.numOfCurrentQuestion != this.Questions.length-1) {
            this.$refs.childAnswer.answerToQuestionIs();
            let ruleResult = null;
            if(this.Question.config.length != 0) {
              ruleResult = this.ruleOk(this.Question.config); // if rule is not satisfied this function will return -1
              if(ruleResult.rule !== -1) { // if rule is ok then skip to 
                console.log("ruleResult.skipTo: ", ruleResult.skipTo);
                this.Question = this.getQuestionToSkip(ruleResult.skipTo);
                console.log("Skipped Question: ", this.Question);
                this.numOfCurrentQuestion = ruleResult.skipTo -1;
                this.Type = this.Question.Type;
                this.currentQuestion = this.currentComponent(this.Type);
              }else {
                this.numOfCurrentQuestion++;
                this.Question = this.$store.state.newProject.Questions[this.numOfCurrentQuestion]
              }
            }else {
              this.numOfCurrentQuestion++;
              this.Question = this.$store.state.newProject.Questions[this.numOfCurrentQuestion]
            }
          } else {
            this.currentQuestion = 'Thanks'
          }
        }
    },
}
</script>

<style>

</style>