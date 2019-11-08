<template>
      <v-container class="pa-0 fill-height"   fluid >
          <v-row no-gutters class="  fill-height" align="start" justify="start">
              <v-col md="3" lg="3" sm="4" class=" fill-height" >
                 <v-card flat class="pt-2 fill-height" >
                     <v-card-actions>
                        <v-select
                            class="mr-2"
                            :items="types"
                            label="Type"
                            dense
                            outlined
                            @change="typeChanged"
                            v-model="type"
                        ></v-select>
                    </v-card-actions>
                <v-card-text class="pa-0">
                     <v-list dense  style="overflow-x: auto; overflow-y: auto; border-radius:0; height: 81vh;">
                        <template v-for="item in items">
                        <v-list-item
                            :key="item.id"
                            @click="navigateTo(item.text)"
                        >
                            <v-list-item-content>
                            <v-list-item-title>
                                {{ item.name }}
                            </v-list-item-title>
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
        axios.post('http://192.168.0.188:4000', {
            query: `
                    {
                        projects(branch: 1, type: ${this.type}){
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
    },
    data: () => ({
        item: 1,
        type: 0,
        types: ['All', 'Reatail', 'Customer'],
        items: [{name: 'Retail Satisfaction survey'}],
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