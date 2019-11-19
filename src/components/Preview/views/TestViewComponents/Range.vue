<template>
<v-card>
    <v-card-title>
        {{Question}}
    </v-card-title>
    <v-card-text>
        <!-- here goes answers -->
     <v-card-text>
      <v-slider
        v-model="range"
        :tick-labels="ticksLabels"
        :max="9"
        step="1"
        ticks="always"
        tick-size="2"
      ></v-slider>
      
    </v-card-text>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    props: {
        myNumber: {
            type: Number,
            default: 2
        }
    },
    mounted() {
        this.Question = this.$store.getters.getQuestion(this.myNumber);
        console.log(this.$store.getters.getQuestion(this.myNumber).Question);
        this.Answers = this.Question.Answers;
        this.Question = this.Question.Question;
    },
    data() {
        return {
            Question:null,
            Answers: [],
            range: 0,
            givenAnswer:'',
            ticksLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        }
    },
    methods: {
        Answering(e) {
            
            let p = [];
            p[0] = this.givenAnswer+"";
            console.log('OOO: ', p);
            this.$emit('onMultipleChng', p);
        },
        answerToQuestionIs() {
            this.$store.dispatch('SET_ANSWER', this.range+1);
        }
    }

}
</script>

<style>

</style>