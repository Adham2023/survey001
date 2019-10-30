<template>
  <v-container fluid class="fill-height">
      <v-row justify="center" >
          <v-col md="10">
              <v-card flat class="pa">
                   <v-card-title class="title grey--text text--darken-2">
                       Configs {{title + ' ' + item}}
                    </v-card-title>
                  <v-text-field
                    label="Title"
                    outlined
                    dense
                    v-model="title"
                ></v-text-field>
                <v-select
                    :items="items"
                    label="Type"
                    dense
                    outlined
                    v-model="item"
                ></v-select>
                    <v-card flat>
                        <v-card-title class="title grey--text text--darken-2">
                            Required Parameters: {{ r_selected}}
                        </v-card-title>
                           <v-container fluid  class="fill-height"> 
                               <v-row justify="start" >
                                   <v-col
                                        v-for="(req, i) in required_parameters" 
                                        :key="i"
                                        md="3"
                                   >
                                          <v-checkbox 
                                            disabled
                                            v-model="r_selected" 
                                            :label="req.label" 
                                            :value="req.value"
                                            @change="prop_changed(i)"
                                            ></v-checkbox>
                                   </v-col>
                               </v-row>
                               <v-row>
                                   <v-col>
                                       <v-expansion-panels>
                                            <v-expansion-panel v-show="required_parameters[0].c">
                                                <v-expansion-panel-header>Age</v-expansion-panel-header>
                                                <v-expansion-panel-content>

                                                    <v-container>
                                                        <v-row>
                                                            <v-col>
                                                                <v-text-field
                                                                    label="From"
                                                                    outlined
                                                                    dense
                                                                    v-model="from"
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col>
                                                                <v-text-field
                                                                        label="To"
                                                                        outlined
                                                                        dense
                                                                        v-model="to"
                                                                 ></v-text-field>
                                                            </v-col>
                                                            <v-col
                                                                v-show="required_parameters[2].c"
                                                            >
                                                                    <v-select
                                                                        :items="genders"
                                                                        label="Gender"
                                                                        dense
                                                                        outlined
                                                                        v-model="gender"
                                                                    ></v-select>
                                                            </v-col>
                                                            <v-col>
                                                                <v-btn @click="addAgeGroup" class="green white--text">
                                                                    <span>Add</span>
                                                                </v-btn>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row >
                                                            <v-col  md="6">
                                                                 <v-list
                                                                    dense
                                                                    two-line
                                                                    flat
                                                                   
                                                                >
                                                                    <v-subheader>Age-Groups</v-subheader>
                                                                    <v-list-item-group v-model="item" color="primary">
                                                                    <v-list-item
                                                                        v-for="(age, i) in ageGroup"
                                                                        :key="i"
                                                                    >
                                                                        
                                                                        <v-list-item-content>
                                                                        <v-list-item-title >{{age.from + ' - ' + age.to}}</v-list-item-title>
                                                                        <v-list-item-subtitle >{{age.gender}}</v-list-item-subtitle>
                                                                        </v-list-item-content>
                                                                    </v-list-item>
                                                                    </v-list-item-group>
                                                                </v-list>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                            <v-expansion-panel v-show="required_parameters[1].c">
                                                <v-expansion-panel-header>Brand Usage</v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                   </v-col>
                               </v-row>
                           </v-container>

                    </v-card>
                    <v-card-actions>
                        <v-btn :disabled="validInfo" class="primary" @click="Done">
                            <span>Done</span>
                        </v-btn>
                    </v-card-actions>
              </v-card>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            title: '',
            item: '',
            r_selected: [],
            gender: '',
            from: '',
            to:'',
            genders: ['M','F', 'Both'],
            ageGroup: [],
            required_parameters: [
                { label: 'Age', value: 'Age', c: false},
                { label: 'Brand-Usage', value: 'BUsage', ch: false},
                {label: 'Gender', value: 'G', c: false}
            ],
            items: [
                'Retail',
                'Customer',
            ],
        }
    },
    computed: {
        validInfo() {
            return this.item == '' || this.title =='';
        }
    },
    methods: {
        Done() {
            if(this.item != '' && this.title !=''){
                axios.post('http://192.168.0.188:4000', {
                query: `
                     mutation {
                        createProject(branch: 1, name: "${this.title}", type:${this.items.indexOf(this.item) +1} ) {
                            id
                        }
                    }
                `
            }).then( result => {
                console.log(result.data)
            })
            }
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