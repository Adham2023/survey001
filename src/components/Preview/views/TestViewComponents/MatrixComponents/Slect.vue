<template>
  <v-select outlined :items="selectionItems" v-model="selected">

  </v-select>
</template>

<script>
export default {
    props: ['selectionItems'],
    data() {
        return {
            selected:''
        }
    }
}
</script>

<style>

</style>