<template>
  <v-container fluid class="fill-height">
      <v-row justify="center" class="">
          <v-col class="text-center ">
              <h3>Assignments</h3>
          </v-col>
      </v-row>
      <v-row justify="space-around" align="start" no-gutters class="fill-height">
          <v-col md="3">
               <v-select
                    :items="projects"
                    label="Projects"
                    outlined
                    v-model="project"
                ></v-select>
          </v-col>
           <v-col md="3">
               <v-select
                    :items="users"
                    label="Users"
                    outlined
                    v-model="user"
                ></v-select>
          </v-col>

          <v-col md="3">
               <v-btn class="green white--text" @click="Assign">
                   <span>Assign</span>
               </v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    mounted() {
        axios.post('http://192.168.0.188:4000', {
            query: `{
                projects(branch: 1) {
                    id
                    name
                }
            }
            `
        }).then(result => {
            console.log(result.data.data.projects)
            result.data.data.projects.forEach(project => {
                this.projects.push({
                    text: project.name,
                    value: project.id
                })
            })

        })
        axios.post('http://192.168.0.188:4000', {
            query: `{
                users {
                    id
                    username
                }
            }
            `
        }).then(result => {
            console.log(result.data.data.users)
            result.data.data.users.forEach(element => {
                this.users.push({
                    text: element.username,
                    value: element.id
                })
            });
        })
    },
    data() {
        return {
             users: [],
             user: '',
             projects: [],
             project: '',
        }
    },
    methods: {
        Assign() {
            axios.post('http://192.168.0.188:4000', {
                query: `
                    mutation {
                        setPlan(user: ${this.user} , project: ${this.project}) {
                            id
                            project {
                                name
                            }
                        }
                    }
                `
            }).then( result => {
                console.log(result.data.data)
            })
        }
    }
}
</script>

<style>

</style>