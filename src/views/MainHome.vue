<template>
  <v-container>
      <v-row >
          <v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card  :elevation="hover ? 12 : 2" height="" width="auto" @click="navigateTo">
                  <v-container class=" fill-height pa-0 ">
                      <v-row align="center" class="pa-auto">
                          <v-col cols="4" class="text-center">
                              <v-icon class="ic" >
                                  
                                   apps
                              </v-icon>
                          </v-col>
                          <v-col class="">
                              <h4>Projects</h4>
                              <p class="number">105 / 250</p>
                          </v-col>
                      </v-row>
                  </v-container>
              </v-card>
               </v-hover>
          </v-col>
           <v-col>
               <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2"  height="" width="auto" @click="navigateTo">
                  <v-container class=" fill-height pa-0 ">
                      <v-row align="center" class="pa-auto">
                          <v-col cols="4" class="text-center">
                              <v-icon class="ic" >
                               mdi-account-check-outline
                              </v-icon>
                          </v-col>
                          <v-col class="">
                              <h4>Users</h4>
                              <p class="number">105 / 500</p>
                          </v-col>
                      </v-row>
                  </v-container>
              </v-card>
                 </v-hover>
          </v-col>
           <v-col>
               <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2"  height="" width="auto" @click="navigateTo">
                  <v-container class=" fill-height pa-0 ">
                      <v-row align="center" class="pa-auto">
                          <v-col cols="4" class="text-center">
                              <v-icon class="ic" >
                                  
                                   call_split
                              </v-icon>
                          </v-col>
                          <v-col class="">
                              <h4>Branches</h4>
                              <p class="number">3 / 5</p>
                          </v-col>
                      </v-row>
                  </v-container>
              </v-card>
                 </v-hover>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    methods: {
        navigateTo() {
            this.$router.push({path: 'Projects'})
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    font-family: 'Adamina', serif;
    font-weight: bold;
}

.ic 
    {
        font-size: 60px;
  background: -webkit-linear-gradient( #baf6ce, #af92eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.number {
    font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  background: -webkit-linear-gradient( #5b88d7, #5b88d7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}


</style>