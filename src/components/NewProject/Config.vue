<template>
  <v-container fluid class="">
      <v-row justify="center" >
          <v-col md="10">
              <v-card class="pa-10">
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
                    <v-card outlined>
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
                                                <v-expansion-panel-header>Brand-Usage</v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    
                                                </v-expansion-panel-content>
                                                
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                   </v-col>
                               </v-row>
                           </v-container>

                    </v-card>
              </v-card>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
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
                'Customer',
                'Retail'
            ],

            itemss: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
        }
    },
    methods: {
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