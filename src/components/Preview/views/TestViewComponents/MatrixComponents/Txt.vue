<template>
  <v-text-field
    :placeholder="placeHolder"
    v-model="textInpt"
  >

  </v-text-field>
</template>

<script>
export default {
    props: ['placeHolder'],
    data() {
        return {
            textInpt: '',
        }
    }
}
</script>

<style>

</style>