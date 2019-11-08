<template>
  <v-card class="flex-grow-1 pa-8"  style="overflow-x: auto; overflow-y: auto; height: 80vh;">
  
    <v-card-title > Q{{currentQuestion}}.) Range Based Question</v-card-title>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col>
                    <v-textarea
                        outlined
                        name="input-7-1"
                        label="Question Body"
                        hint="Add Question Body Which Requoires Text Input"
                        v-model="questionBody"
                    ></v-textarea>
                </v-col>
            </v-row>
           
        </v-container>
    </v-card-text>
    <v-card-actions>
        <v-container>
            <v-row justify="end"  class="" >
             
              <v-col md="4" class="mr-auto ">
                <v-text-field
                  label="1 /"
                  outlined
                  v-model="range"
                  prepend-icon="1"
                >
                </v-text-field>
              </v-col>
                <v-col md="auto">
                    <v-btn class="error white--text" @click="Cancel">
                        <v-icon>
                            cancel
                        </v-icon>
                        <span>Cancel</span>
                    </v-btn>
                </v-col>
                <v-col md="auto">
                     <v-btn class="green white--text" @click="Save">
                        <v-icon>
                            save
                        </v-icon>
                        <span>Save</span>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data() {
        return {
            questionBody: '',
            range: '',
        }
    },
    computed: {
        ...mapGetters(['currentQuestion']),
    },
    methods: {
        ...mapActions(['INCREMENT_QUESTION_COUNTER', 'ADD_QUESTION']),
        isValid() {
            if(this.questionBody == '' || this.range == '')
                return false;
            return true;
        },
        Save() {
            if(this.isValid()) {

                let question = {
                    Number: this.currentQuestion,
                    Type: 4,
                    Question: this.questionBody,
                    Range: this.range
                }
                this.ADD_QUESTION(question);
                this.INCREMENT_QUESTION_COUNTER(question);
                this.questionBody = '';
                this.range = '';
            }
        },
        Cancel() {
            this.questionBody = '';
            this.range = '';
        }
    }
}
</script>

<style>

</style>