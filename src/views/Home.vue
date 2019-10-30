<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      
    >
      <v-list dense  tile>
        <template v-for="item in routes">
          <v-list-item
            :key="item.text"
            @click="navigateTo(item.path)"
           
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
     
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Surveys Booster</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn text @click="logout">
       <span>Log Out</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content >
           <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data: () => ({
      dialog: false,
      drawer: null,
      routes: [
        { icon: 'view_list', text: 'Projects', path: 'Projects'},
        { icon: 'add_circle_outline', text: 'New Project', path: 'newproject' },
        { icon: 'mdi-clipboard-account', text: 'Assignments', path: 'assignments'},
        { icon: 'bar_chart', text: 'Reports', path: 'reports' },
        { icon: 'person_add', text: 'New User', path: 'newuser' }
      ],
    }),
    methods: {
      navigateTo(j) {
         this.$router.push({path: j})
      },
      logout() {
        this.$router.push({path: 'login'})
      }
    }
}
</script>
