<template>
 <v-container fuid class="fill-height " >
   <v-row justify="space-around" class="fill-height " >
     <v-col md="9" class="fill-height ">
       <keep-alive>
        <component :is="currentQType"></component>
      </keep-alive>
     </v-col>
     <v-col  class="ml-2 fill-height ">

       <v-card
          height="80vh"
          class="mx-auto"
        >
          <v-card flat class="mb-5">
              <v-card-title>Project Info:</v-card-title>
              <v-card-text>
                  <h3 class="">name: <span class=""> {{$store.state.Title}}</span> </h3>
                  <h3>type: {{$store.state.Type}}</h3>
              </v-card-text>
            </v-card>
          <v-card-title>Toolbox</v-card-title>
          <v-card-text>
            
            <v-select
              :items="Q_Types"
              label="Question Type"
              outlined
              v-model="q_type"

            ></v-select>
            <!-- <p>{{q_type}}</p> -->
          </v-card-text>
          <v-card-actions>
            <v-btn  @click="JSONI" text>JSON</v-btn>
          </v-card-actions>
        </v-card>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
import MCH from '../SurveyBodyElements/MultipleChoice';
import RB from '../SurveyBodyElements/RangeBased';
import SS from '../SurveyBodyElements/SingleSelection';
import TIN from '../SurveyBodyElements/TextInput';
import MAT from '../SurveyBodyElements/CustomQuestions/Matrix';
import YN from '../SurveyBodyElements/YesNo';
import {mapActions}from 'vuex';
export default {
  components: {
    MCH,
    RB,
    SS,
    TIN,
    MAT,
    YN
  },
  data() {
    return {
      q_type: 'MCH',
      Q_Types: [ 
                {text:'Multiple Choice', value: 'MCH' }, 
                {text: 'Single Selection', value: 'SS'}, 
                {text: 'Text Input', value: 'TIN'},
                {text: 'Range Based', value: 'RB'}, 
                {text: 'Yes No', value: 'YN'}, 
                { text: 'Matrix', value: 'MAT'}
      ]
    }
  },
  computed: {
    currentQType() {
      return this.q_type;
    }
  },
  methods: {
    ...mapActions(['CONVERT_TOJSON', 'CONSTRUCT_NEW_PROJECT']),
    JSONI() {
      this.CONSTRUCT_NEW_PROJECT();
      this.CONVERT_TOJSON();
    }
  }
}
</script>

<style>

</style>