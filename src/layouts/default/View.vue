<template>
  <v-main>
    <navigation-bar-top></navigation-bar-top>
    <router-view />
        <v-footer :inset="false" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-main>
</template>

<script lang="ts" setup>
  //
  import NavigationBarTop from '@/components/NavigationBarTop.vue'
</script>
