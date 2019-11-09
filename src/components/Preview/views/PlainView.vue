<template>
  <v-container>
    <v-row justify="center">
      <v-col class="" cols="7">
        <v-card  v-for="(question, i) in Questions" :key="i" class="mb-5 pa-5">
          <v-card-text class="black--text">
            {{ question.Question != null ? question.Question : question.Title }}
            
              </v-card-text>
              Answer: ({{type(question.Type)}})
                <p v-for="(answer, i) in question.Answers" :key="i">
                  {{answer}}
                </p>
              <v-card-actions>
            
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    mounted() {
      this.Questions = this.$store.state.newProject.Questions;
      console.log('PlainView: ', this.$store.state.newProject.Questions);
    },
    data() {
      return {
        Questions: [],
      }
    },
    computed: {
      type() {
        return t => {
          let Type = ['Multiple Choice', 'Single Choice', 'Text Input', 'Range Based', 'Yes No', 'Matrix'];
          return Type[t-1];
        }
      }
    }
}
</script>

<style>

</style>