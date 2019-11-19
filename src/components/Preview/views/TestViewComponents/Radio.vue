<template>
<v-card>
    <v-card-title>
        {{Question}}
    </v-card-title>
    <v-card-text>
        <!-- here goes answers -->
      <v-radio-group v-model="givenAnswer" >
           <v-radio 
                    :label="answer" 
                    :value="answer"
                    @change="Answering" 
                    v-for="(answer, i) in Answers" 
                    :key="i">
        </v-radio>
      </v-radio-group>
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
            givenAnswer:''
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
            this.$store.dispatch('SET_ANSWER', this.givenAnswer);
        }
    }

}
</script>

<style>

</style>