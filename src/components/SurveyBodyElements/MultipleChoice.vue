<template>
  <v-card class="flex-grow-1 pa-8"  style="overflow-x: auto; overflow-y: auto; height: 80vh;">
    <v-card-title >Multiple Choice Question</v-card-title>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col>
                    <v-textarea
                        name="input-7-1"
                        label="Question Body"
                        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                        hint="Multiple choice Question Body"
                        v-model="questionBody"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col>
                     <v-text-field
                            label="Choice"
                            single-line
                            filled
                            prepend-icon="crop_square"
                            v-model="choice"
                        ></v-text-field>
                </v-col>
                <v-col md="2" class="">
                    <v-btn text @click="Add">
                        <v-icon >add_circle</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item 
                            v-for="(ans, i) in possibleAnswers"
                            :key="i"
                        >
                            <v-list-item-avatar>
                            <v-icon
                                v-text="'crop_square'"
                            ></v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-text="ans"></v-list-item-title>
                                </v-list-item-content>
                        </v-list-item>
                    </v-list>
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
export default {
    data() {
        return {
            choice: '',
            questionBody: '',
            possibleAnswers: [],

        }
    },
    methods: {
        Save() {

        },
        Add() {
            this.possibleAnswers.unshift(this.choice);
            this.choice = '';
            
        },
        Cancel() {
            this.possibleAnswers = [];
            console.log(this.possibleAnswers);
            this.choice = '';

        }
    }
}
</script>

<style>

</style>