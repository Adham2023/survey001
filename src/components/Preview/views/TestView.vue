<template>
  <v-container class="" height="80vh" >
    <v-row justify="center" >
      <v-col cols="6" >
        <v-card flat height="400px" width="600px" style="overflow-x: auto; overflow-y: auto;">
          <v-card-text>
            <component :is="currentQuestion" :myNumber=""/>
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
import Radio from './TestViewComponents/Radio';
import Range from './TestViewComponents/Range';
import Txt from './TestViewComponents/Txt';
import YesNo from './TestViewComponents/YesNo';
import Thanks from './TestViewComponents/Thanks';
import {currentCompontMixin} from './TestViewComponents/mixins/getCurrentCompoent';
export default {
  mixins: [currentCompontMixin],
    components: {
      Matrix,
      Multiple,
      Radio,
      Range,
      Txt,
      YesNo,
      Thanks
    },
    mounted() {
      this.Type = this.$store.state.newProject.Questions[this.numOfCurrentQuestion].Type;
      this.myNumber = this.$store.state.newProject.Questions[this.numOfCurrentQuestion].Number;
      this.currentQuestion = this.currentComponent(this.Type);
    },
    data() {
      return {
        currentQuestion: '',
        numOfCurrentQuestion: 0,
        myNumber: 0,
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
        // there is no rule or 
      }
    },
}
</script>

<style>

</style>