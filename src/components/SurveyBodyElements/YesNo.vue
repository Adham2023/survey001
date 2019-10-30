<template>
  <v-card class="flex-grow-1 pa-8"  style="overflow-x: auto; overflow-y: auto; max-height: 77vh;">
    <v-card-title >Yes No Question</v-card-title>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col>
                    <v-textarea
                        name="input-7-1"
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
export default {
    data() {
        return {
            questionBody: '',

        }
    },
    methods: {
        Save() {

        },
        Cancel() {
        }
    }
}
</script>

<style>

</style>