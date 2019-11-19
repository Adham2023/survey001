<template>
<v-card>
    <v-card-title>
        {{Question + ' ' + givenAnswer}}
    </v-card-title>
    <v-card-text>
        <!-- here goes answers -->
       <v-checkbox 
                    v-model="givenAnswer" 
                    :label="answer" 
                    :value="answer"
                    @change="Answering" 
                    v-for="(answer, i) in Answers" 
                    :key="i"></v-checkbox>
    </v-card-text>
</v-card>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: {
        myNumber: {
            type: Number,
            default: 1
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
            givenAnswer:[]
        }
    },
    methods: {
        
        Answering(e) {
            console.log(e);
            
        },
        answerToQuestionIs() {
            this.$store.dispatch('SET_ANSWER', this.givenAnswer);
        }
    }

}
</script>

<style>

</style>