<template>
<v-card>
    <v-card-title>
        {{Question}}
    </v-card-title>
    <v-card-text>
        <!-- here goes answers -->
      <v-text-field v-model="givenAnswer" label="Your Answer" placeholder="Your answer goes here ...">

      </v-text-field>
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
            
        },
        answerToQuestionIs() {
            this.$store.dispatch('SET_ANSWER', this.givenAnswer);
        }
    }

}
</script>

<style>

</style>