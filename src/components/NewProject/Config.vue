<template>
  <v-container fluid class="fill-height">
      <v-row justify="center" >
          <v-col width="100" md="10">
              <v-card flat class="">
                   <v-card-title class="title grey--text text--darken-2">
                       Configs
                    </v-card-title>
                  <v-text-field
                    label="Title"
                    outlined
                    dense
                    
                    v-model="title"
                ></v-text-field>
                {{item}}
                <v-select
                    :items="items"
                    label="Type"
                    dense
                    outlined
                    width="500"
                    v-model="item"
                ></v-select>
                   
                    <v-card-actions>
                         <v-btn class="error" @click="Cancel">
                            <span>Cancel</span>
                        </v-btn>
                        <v-btn :disabled="validInfo" class="primary" @click="Done">
                            <span>Save</span>
                        </v-btn>
                    </v-card-actions>
              </v-card>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex';
import axios from 'axios'
export default {
    data() {
        return {
            title: '',
            item: '',
            r_selected: [],
            items: [
                'Retail',
                'Consumer',
            ],
        }
    },
    computed: {
        validInfo() {
            return this.item == '' || this.title =='';
        }
    },
    methods: {
        ...mapActions(['SET_TITLE', 'SET_TYPE']),
        Cancel() {
            this.item = '';
            this.title = '';
        },
        Done() {
            this.$store.state.currentTab++;
            this.$store.dispatch('PROJECT_INCR')
            this.SET_TYPE(this.item);
            this.SET_TITLE(this.title);
            this.item = '';
            this.title = '';
        },
        prop_changed(i) {
            this.required_parameters[i].c = !this.required_parameters[i].c;
        },
        addAgeGroup() {
            this.ageGroup.unshift({
                from: parseInt(this.from),
                to: parseInt(this.to),
                gender: this.gender
            })
            console.log('age: ', this.ageGroup)
            this.gender = '',
            this.to = '';
            this.from = '';
        }
    }
}
</script>

<style>

</style>