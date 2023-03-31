<template>
      <v-app-bar app fixed elevation-2>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link to="/" class="ml-3 mr-3"> <v-app-bar-title >Markus Wagner</v-app-bar-title></router-link>
      <!-- <v-toolbar></v-toolbar> -->
      <v-toolbar-items>
        <v-btn v-for="(item, index) in visibleRoutes" v-bind:key="index" :to="item.path">{{item.name}}</v-btn>
        <!-- <v-btn>Love Music</v-btn> -->

      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
  export default {
    data() {
      return {
        visibleRoutes: [
          // { name: 'Home', path: '/' },
          { name: 'Love Music', path: 'music' },
          { name: 'Nerdy', path: '/nerdy' },
          { name: 'Contact', path: '/contact' },
          {}
        ]
      }
    }
  }
</script>
