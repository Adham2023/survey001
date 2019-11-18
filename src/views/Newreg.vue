<template>
    <v-container
        class="fill-height"
        fluid
      > 
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
                <v-container  class="pa-0 ma-0">
                  <v-row>
                    <v-col>
                      Branch: {{brachProp }}
                    </v-col>
                    <v-col>
                      <v-select
                        outlined
                        :items="branches"
                        v-model="branch"
                        label="Branches"
                      >

                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row class="pa-0" align="center" >
                    <v-col class="">
                     Raqam: {{raqamProp }}

                    </v-col>
                    <v-col>
                      <v-select
                      
                        outlined
                        label="Raqamlar"
                        :items="rs"
                        v-model="raqam"
                      >

                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row class="pa-0" align="center" >
                    <v-col>
                      Role: {{RoleProp}}
                    </v-col>
                    <v-col>
                      <v-select
                         outlined
                        label="Role"
                        :items="roles"
                        v-model="role"
                      >

                      </v-select>
                    </v-col>
                  </v-row>
                </v-container>
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
                <v-btn @click="Register" color="primary ma-3">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>


      </v-container>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'user',
  mounted() {
    
    /* getting ucell number */
    this.getNumber();
    this.getBranches();
  },
  components: {
  },
  data() {
      return {
          role:'',
          branches: [],
          branch: '',
          roles: [
            {text: "Admin", value: 0},
            {text: "Agent", value: 1}
          ],
          raqam:"",
          rs: [],
          username: '',
          password: '',
          confirm_password: '',
          firstname: '',
          secondname: '',
          ID: ''
      }
  },
  computed: {
    RoleProp() {
      return this.roles.find(e => e.value == this.role).text;
    },
    raqamProp() {
      let r = this.raqam;
      console.log("find: ", this.rs.find(e => e.value ==r))
      let a = '';
      
      if(this.rs.find(e => e.value == r) != undefined){
         return this.rs.find(e => e.value == r).text;
      }
      return a;
    },
    brachProp() {
      let r = this.branch;
      console.log("brach find: ", this.branches.find(e => e.value ==r))
      let a = '';
      console.log("branches: ", this.branches);
      if(this.branches.find(e => e.value == r) != undefined){
         return this.branches.find(e => e.value == r).text;
      }
      return a;
    }

  },
  methods: {
    getBranches() {
      axios({
        url: "http://192.168.43.134:4000",
        method: "POST",
        data: {
          query: `
            {
                branches {
                    pk
                    name
                    code
                }
            } 
          `
        }
      })
      .then(result => {
        
        result.data.data.branches.forEach(item => {
          this.branches.push({
            text: ""+item.name,
            value: item.pk
          })
        })
        console.log(this.branches);
      })
      .catch(e => {
        console.log(e);
      })
    },
    Register() {
      axios( {
        url: "http://192.168.43.134:4000",
        method: "POST",
        data: {
          query: `
            mutation {
                createUser(
                    input: {
                        branch: ${this.branch}
                        subscriber: ${this.raqam}
                        password: "${this.password}"
                        role: ${this.role}
                        firstName: "${this.firstname}"
                        lastName: "${this.secondname}"
                    }
                ) {
                    pk
                }
            }
          `
        }
      }).then(result => {
        console.log(result.data.data);
        this.firstname = '';
        this.secondname = '';
        this.role = '';
        this.raqam = '';
        this.branch = '';
        this.password = '';
        this.confirm_password = '';
      }).catch(e => {
        console.log('error')
      })
    },
    getNumber() {
      axios({
        url: 'http://192.168.43.134:4000',
        method: 'POST',
        data: {
          query: ` 
              {
                  subscribers(joined: false) {
                      pk
                      number
                      joined
                  }
              }
        `
        }
      })
      .then(result => {
        let res = result.data.data.subscribers;
        // this.rs = [];
        res.forEach(element => {
            this.rs.push( {
              text: "+9989 "+element.number,
              value: element.pk
            })
        });
        console.log("rs: ", this.rs);
        console.log(result.data.data.subscribers);
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  
}
</script>
