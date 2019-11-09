<template>
  <v-card flat outlined>
      <v-card-title>
          {{question.Question }}
      </v-card-title>
      <v-card-text v-if="!isSkiping">
          <v-text-field v-model="answer"></v-text-field>
      </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    props: {
        which: {
            type: Number
        },
        isSkiping: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            answer: '',
        }
    },
    computed: {
        question() {
            return this.$store.getters.getQuestion(this.which);
        }
    }

}
</script>

<style>

</style>