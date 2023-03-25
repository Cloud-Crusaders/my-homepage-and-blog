<template>
  <v-app :dark="true" id="home">
  <!-- <v-toolbar dark title="Markus Wagner"></v-toolbar> -->
    <v-main>
    <navigation-bar-top></navigation-bar-top>
      <HelloWorld />
    </v-main>
    <v-footer :inset="false" app>
    <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import NavigationBarTop from '@/components/NavigationBarTop'
</script>
