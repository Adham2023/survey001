<template>
  <v-card class="flex-grow-1 pa-8"  style="overflow-x: auto; overflow-y: auto; height: 80vh;">
  
    <v-card-title >Q{{currentQuestion}}.</v-card-title>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col>
                    <v-textarea
                        name="input-7-1"
                        outlined

                        label="Question Body"
                        hint="Add Yes No Question Body"
                        v-model="questionBody"
                    ></v-textarea>
                </v-col>
            </v-row>
           
        </v-container>
    </v-card-text>
    <v-card-actions>
        <v-container>
            <v-row justify="end" >
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

        }
    },
    computed: {
        ...mapGetters(['currentQuestion'])
    },
    methods: {
        ...mapActions(['ADD_QUESTION', 'INCREMENT_QUESTION_COUNTER']),
        isValid() {
            if(this.questionBody == '') 
                return false;
            return true;
        },
        Save() {
            if(this.isValid()) {
                let question = {
                    config: {
                        isChild:false, 
                        isParent: true,
                        Rule: null
                    },
                    Number: this.currentQuestion,
                    Type: 5,
                    Question: this.questionBody,
                    Answers: [1, 0]
                }
                this.ADD_QUESTION(question);
                this.INCREMENT_QUESTION_COUNTER();
                this.questionBody = '';
            }
        },
        Cancel() {
             this.questionBody = '';
        }
    }
}
</script>

<style>

</style>