<template>
  <v-switch v-model="switchedTo" @change="changed" value :input-value="switchedTo"></v-switch>
</template>

<script>
export default {
    data() {
        return {
            switchedTo: false,
        }
    },
    methods: {
        changed(e) {
            console.log(e);
        }
    }
}
</script>

<style>

</style>