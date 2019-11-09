<template>
  <v-card class="flex-grow-1 pa-8"  style="overflow-x: auto; overflow-y: auto; height: 80vh;">
    <v-card-title >Q{{currentQuestion}}.</v-card-title>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col>
                    <v-textarea
                        name="input-7-1"
                        label="Question Body"
                        hint="Add Question Body Which Requoires Text Input"
                        v-model="questionBody"
                        outlined
                    ></v-textarea>
                </v-col>
            </v-row>
           
        </v-container>
    </v-card-text>
    <v-card-actions>
        <v-container>
            <v-row justify="end"  class="" >
              <v-col md="5" class="mr-auto ">
                 <v-select
                  :items="inputType"
                  label="Text Input Type"
                  outlined
                  v-model="inptType"
                ></v-select>
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
            inptType: '',
            inputType: ['number', 'email', 'date', 'phone', 'text']
        }
    },
    computed: {
        ...mapGetters(['currentQuestion'])
    },
    methods: {
        ...mapActions(['INCREMENT_QUESTION_COUNTER', 'ADD_QUESTION']),
        isValid() {
            if(this.questionBody == '')
                return false;
            return true;
        },
        Save() {
            if(this.isValid()) {

                let question =  {
                    config: {
                        isChild:null, 
                        isParent: null,
                        Rule: null
                    },
                    Number: this.currentQuestion,
                    Type: 3,
                    InputType: this.inptType,
                    Question: this.questionBody
                }

                this.ADD_QUESTION(question);
                this.INCREMENT_QUESTION_COUNTER();
                this.questionBody = '';
                this.inptType = '';

            }
        },  
        Cancel() {
            this.inptType = '';
            this.questionBody = '';
        }
    }
}
</script>

<style>

</style>