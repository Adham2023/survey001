<template>
    <v-container
        class="fill-height"
        fluid
      >

    <!-- <v-row  align="center"
          justify="center">
                <h2 class="h2">Register New User</h2>
    </v-row>      -->

        <v-row
          align="center"
          justify="center"
         class="fill-height"
        >
          <v-col
            cols="6"
          >
            <v-card flat class="pa-10">
              <v-card-title>
               Register new User
              </v-card-title>
              <v-card-text>
                <v-form>
                    <v-text-field
                    label="First Name"
                    name="firstname"
                    type="text"
                    v-model="firstname"
                  ></v-text-field>
                  <v-text-field
                    label="Second Name"
                    name="secondname"
                    type="text"
                    v-model="secondname"
                  ></v-text-field>
                  <v-text-field
                    label="Username"
                    name="username"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    label="ID"
                    name="ID"
                    type="text"
                    v-model="ID"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Create a Password"
                    name="password"
                    type="text"
                    v-model="password"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Confirm Password"
                    name="password"
                    type="text"
                    v-model="confirm_password"
                  ></v-text-field>
                   
                 
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary ma-3">Cancel</v-btn>
                <v-btn color="primary ma-3">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>


      </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'user',
  components: {
  },
  data() {
      return {
          username: '',
          password: '',
          confirm_password: '',
          firstname: '',
          secondname: '',
          ID: ''
      }
  }
}
</script>
