<template>
  <v-container class="" height="80vh">
    <v-row justify="center" >
      <v-col cols="6" >
        <v-card flat height="400px">
          <v-card-text>
            <component is="" />
          </v-card-text>
        </v-card>
        
      </v-col>
    </v-row>
    <v-row justify="center" class="" >
      <v-col cols="1" class="">
        <v-btn @click="Next" text class="primary white--text">
          <span>Next</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
export default {
    mounted() {
      this.Project = this.$store.state.newProject.Project;
      console.log('TestView: ', this.Project[0].Questions);
    },
    data() {
      return {
        Project: [],
      }
    },
    computed: {
        Questions() {
          return this.Project[0].Questions;
        }
    },
    methods: {
      Next() {

      }
    },
}
</script>

<style>

</style>