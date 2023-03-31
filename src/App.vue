<template>
  <v-app :dark="true" id="home">
  <!-- <v-toolbar dark title="Markus Wagner"></v-toolbar> -->
    <v-main>
    <!-- <navigation-bar-top></navigation-bar-top> -->
      <!-- <HelloWorld /> -->
      <router-view></router-view>
    </v-main>
    <!-- <v-footer :inset="false" app>
    <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer> -->
  </v-app>
</template>

<script setup lang="ts">

</script>
