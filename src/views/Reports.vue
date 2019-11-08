<template>
      <v-container class="pa-0 fill-height"   fluid >
          <v-row no-gutters class="  fill-height" align="start" justify="start">
              <v-col md="3" lg="3" sm="4" class=" fill-height" >
                 <v-card flat class="pt-2 fill-height" >
                   <v-card-title>
                     Reports
                   </v-card-title>
                     <v-card-actions>
                        <!-- <v-select
                            class="mr-2"
                            :items="types"
                            label="Type"
                            dense
                            outlined
                            @change="typeChanged"
                            v-model="type"
                        ></v-select> -->
                    </v-card-actions>
                <v-card-text class="pa-0">
                     <v-list dense  style="overflow-x: auto; overflow-y: auto; border-radius:0; height: 81vh;">
                        <template v-for="item in items">
                        <v-list-item
                            :key="item.id"
                            @click="navigateTo(item.text)"
                        >
                            <v-list-item-content>
                            <v-list-item-title class="ma-4 subtitle-2">
                                {{ item.name }}
                            </v-list-item-title>
                            <!-- <v-btn style="width: 25%" small text class="green white--text">
                              <v-icon>file_download</v-icon>
                              <span>Download</span>
                              
                            </v-btn> -->
                           <download-excel
                                      class   = "btn btn-default"
                                      :data   = "json_data"
                                      :fields = "json_fields"
                                      worksheet = "My Worksheet"
                                      name    = "Report001.xlsx">
                                     <v-btn class="green ma-5 white--text">
                                        <span>Save as XLSX</span>
                                      <v-icon>file_download</v-icon>
                                     </v-btn>
                                  </download-excel>
                            </v-list-item-content>
                        </v-list-item>
                        </template>
                    </v-list>
                </v-card-text>
                    
                 </v-card>
              </v-col>
              <v-col md="7" class="yellow">
              </v-col>
          </v-row>
      </v-container>
</template>

<script>
import axios from 'axios';
  export default {
    mounted() {
        
    },
    data: () => ({

      json_fields: {
            'Complete name': 'name',
            'City': 'city',
            'Telephone': 'phone.mobile',
            'Telephone 2' : {
                field: 'phone.landline',
                callback: (value) => {
                    return `Landline Phone - ${value}`;
                }
            },
        },
        json_data: [
            {
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15',
                'phone': {
                    'mobile': '1-541-754-3010',
                    'landline': '(541) 754-3010'
                }
            },
            {
                'name': 'Thessaloniki',
                'city': 'Athens',
                'country': 'Greece',
                'birthdate': '1987-11-23',
                'phone': {
                    'mobile': '+1 855 275 5071',
                    'landline': '(2741) 2621-244'
                }
            }
        ],
        json_meta: [
            [
                {
                    'key': 'charset',
                    'value': 'utf-8'
                }
            ]
        ],


        item: 1,
        type: 0,
        // types: ['All', 'Reatail', 'Customer'],
        items: [
            {name: 'Retail Satisfaction survey'}, 
           
            ],
    }),
    methods: {
        typeChanged(e) {
            console.log(this.types.indexOf(e));
            axios.post('http://192.168.0.188:4000', {
            query: `
                    {
                        projects(branch: 1, type: ${this.types.indexOf(e)}){
                            id
                            name
                            type
                        }    
                    }
            `
        }).then( result => {
                this.items = result.data.data.projects;
                console.log(result.data.data.projects);
                console.log(this.items);
        })
        }
    }
  }
</script>

<style>

</style>