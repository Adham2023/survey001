<template>
  <v-card class="flex-grow-1 pa-8"  style="overflow-x: auto; overflow-y: auto; height: 80vh;">
        <v-card-title > 
          Q{{currentQuestion}}.
        </v-card-title>
       <v-container >
         <v-row no-gutters justify-space-around align-content="end">
           <v-col class="pa-0">
             <v-card md="6" class="pa-0" flat >
               <v-card-title class="pa-0 grey--text lighten-3">
                 Columns: 
               </v-card-title>
               <v-container>
                 <v-row  class="pa-0">
                    <v-col cols="5" class="pa-0 ml-2">
                      <v-select
                        :items="columnTypes"
                        label="Type"
                        outlined
                        v-model="columnType"
                      ></v-select>
                   </v-col>
                   <v-col  class="d-flex flex-1 pa-1">
                      <v-text-field
                        label="Column Name"
                        v-model="columnName"
                      ></v-text-field>
                   </v-col>
                   <v-col cols="2" class="d-flex justify-center align-center  pa-0">
                     <v-btn @click="addColumn" class="ma-0" text>
                       <v-icon>
                        add_circle
                       </v-icon>
                     </v-btn>
                   </v-col>
                 </v-row>
               </v-container>
               <v-list style="border-width: 1px;">
                 <v-list-item two-line v-for="col in column" :key='col.id'>
                   <v-list-item-content>
                      <v-list-item-title v-text="col.name"></v-list-item-title>
                      <v-list-item-subtitle v-text="columnTypesTitiles[col.type-1]"></v-list-item-subtitle>

                    <v-expansion-panels v-if="col.type == 3">
                      <v-expansion-panel>
                        <v-expansion-panel-header class="grey--text">Items</v-expansion-panel-header>
                        <v-expansion-panel-content text flat>
                          <div >
                            <p  style="display: inline-block; margin-left:5px; border-radius: 8px; background-color: #BBDEFB;padding: 2px" v-for="(item, i) in col.ddItems" :key="i">
                            {{ item.text }} 
                          </p>
                          </div>
                          
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn @click="columnRemove(col.id)" class="red--text" text>
                        <v-icon>
                          mdi-minus
                        </v-icon>
                      </v-btn>
                    </v-list-item-action>
                 </v-list-item>
               </v-list>
             </v-card>
           </v-col>
           <v-col class="pa-0">
            <v-card md="6" class="pa-0" flat >
               <v-card-title class="pa-0 grey--text lighten-3">
                 Product Label:
               </v-card-title>
               <v-container>
                 <v-row  class="pa-0">
                   <v-col  class="d-flex flex-1 pa-1">
                      <v-text-field
                        label="Label"
                        v-model="productLabel"
                      ></v-text-field>
                   </v-col>
                   <v-col cols="2" class="d-flex justify-center align-center  pa-0">
                     <v-btn @click="addProductLabel" class="ma-0" text>
                       <v-icon>
                        add_circle
                       </v-icon>
                     </v-btn>
                   </v-col>
                 </v-row>
               </v-container>
                <v-list dense >
                      <v-list-item  v-for="label in productLabels" :key='label.id'>
                        <v-list-item-content>
                            <v-list-item-subtitle v-text="label.text"></v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-btn @click="productLabelRemove(label.id)" class="red--text" text>
                              <v-icon>
                                mdi-minus
                              </v-icon>
                            </v-btn>
                          </v-list-item-action>
                      </v-list-item>
                    </v-list>
             </v-card>
           </v-col>
         </v-row>
       </v-container>

         <v-row justify="center">
          <v-dialog v-model="dialog" scrollable max-width="400px">
            <!-- <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
            </template> -->
            <v-card>
              <v-card-title>Drop Down Items</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 400px;">
                <v-container>
                    <v-row align="baseline" justify="space-between">
                      <v-col>
                        <v-text-field label="Item" v-model="DDItem">
                        </v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-btn @click="addDDItem" text>
                          <v-icon>add_circle</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-list >
                      <v-list-item  v-for="item in DDItems" :key='item.id'>
                        <v-list-item-content>
                            <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-btn @click="dropDownItemRemove(item.id)" class="red--text" text>
                              <v-icon>
                                mdi-minus
                              </v-icon>
                            </v-btn>
                          </v-list-item-action>
                      </v-list-item>
                    </v-list>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
         </v-row>
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
        dialog: false,
        ddItemCounter: 0,
        columnCounter: 0, 
        columnName: '',
        columnType: '',
        column: [],
        DDItem: '',
        DDItems: [],
        productLabels: [],
        productLabel: '',
        productLblCounter: 0,
        columnTypesTitiles: ['Switch', 'Text', 'Drop Down'],
        columnTypes: [
          {text: 'Switch', value: 1},
         { text: 'Text', value: 2},
          {text: 'Drop Down', value: 3}
        ]
      }
    },
    computed: {
        ...mapGetters(['currentQuestion']),
    },
    watch: {
      columnType: {
        deep: true,
        handler(type) {
          if(type == 3) 
            this.dialog = true;
        }
      }
    },
    methods: {
      ...mapActions(['INCREMENT_QUESTION_COUNTER', 'ADD_QUESTION']),
     
      addProductLabel() {
        this.productLabels.push({
          id: this.productLblCounter++,
          text: this.productLabel
        })
        this.productLabel = '';
      },
      productLabelRemove(id) {
         let remItem;
        let len = this.productLabels.length;
        for(let i = 0; i <len ; i++) {
          if(this.productLabels[i].id == id){
            remItem = i;
            i = len;
          }
        }
        this.productLabels.splice(remItem, 1);
      },
      dropDownItemRemove(id) {
        let remItem;
        let len = this.DDItems.length;
        for(let i = 0; i <len ; i++) {
          if(this.DDItems[i].id == id){
            remItem = i;
            i = len;
          }
        }
        this.DDItems.splice(remItem, 1);

      },
      columnRemove(id) {
        let remCol;
        let len = this.column.length;
        for(let i = 0; i < len; i++) {
          if(this.column[i].id === id) {
            remCol = i;
            i = len;
          }
        }
        this.column.splice(remCol, 1);
      },
     Save() {
       let Matrix = {
         Number: this.currentQuestion,
         Type: 6,
         productLabels: this.productLabels,
         columns: this.column
       }
       this.ADD_QUESTION(Matrix);
        this.INCREMENT_QUESTION_COUNTER();
       this.productLabels = [];
       this.column = [];
      },
      Cancel() {
        this.productLabels = [];
       this.column = [];
      },
      addDDItem() {
        this.DDItems.push({
          id: this.ddItemCounter++,
          text: this.DDItem
        });
        this.DDItem = '';
      },
      addColumn(){
        if(this.columnName == '' || this.columnType == '') /* here should implement validator for input fields */
          return

           if(this.columnType == 3) {
             this.column.push( {
              id: this.columnCounter++,
              name: this.columnName,
              type: this.columnType,
              ddItems: this.DDItems
            })
           } else {
              this.column.push( {
              id: this.columnCounter++,
              name: this.columnName,
              type: this.columnType
            })
           }
        this.columnName = '';
        this.columnType = '';
        this.DDItems = [];
        this.ddItemCounter = 0;
        console.log(this.column);
       },
    }
  }
</script>

<style>
table {
			border-collapse: collapse;
		}
		th, td {
			padding: 1rem;
			border: 1px solid black;
		}

		#addRow, #addCol {
			font-size: 2rem;
			background-color: #642887;
			color: #ffffff;
			text-align: center;
			cursor: pointer;
		}

</style>