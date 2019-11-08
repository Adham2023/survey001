<template>
  <v-card color="" class="fill-height">
     <!-- <v-toolbar flat class="white grey--text" dark>
      <v-toolbar-title>New Project</v-toolbar-title>
    </v-toolbar> -->
    <v-tabs
      v-model="$store.state.currentTab"
      background-color="grey lighten-4"
      color="basil"
      vertical
      class="fill-height  VTabs"
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    

      <v-tab-item class="">
        <Configs />
      </v-tab-item>
      <v-tab-item class="">
        <SurveyBody />
      </v-tab-item>
      <v-tab-item class="">
        <Logic />
      </v-tab-item >
      <v-tab-item class="">
       <Preview />
      </v-tab-item>
      </v-tabs>
  </v-card>
</template>

<script>
// @ is an alias to /src
import Configs from '@/components/NewProject/Config';
import SurveyBody from '@/components/SurveyBody/SurveyBody'
import Logic from '@/components/Logic/Logic'
import Preview from '@/components/Preview/Preview';
  export default {
    components: {
      Configs,
      SurveyBody,
      Logic,
      Preview
    },
    mounted() {
    },
    data () {
      return {
        tab: null,
        items: [
          'Configs', 'Survey Body', 'Logic', 'Preview',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
<style scoped>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
.VTabs {
  border-left-width: 2px;
  border-left-color: #356859; 
}
</style>