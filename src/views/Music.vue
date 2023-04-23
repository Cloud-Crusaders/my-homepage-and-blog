<template>
  <v-container>
    <h2>Music is my best friend: DJ & Producer for over a decade!</h2>
    <v-card>
      <v-card-title style="font-size: 20px;">
        <a href="https://1drv.ms/f/s!AlTDL3a0Xi3TjL4ZWLZd8dCYJka_0A?e=fYfSFu" target="_blank" class="d-inline-flex align-center">
          <v-img class="mr-2" :width="70" src="../assets/onedrive.png"></v-img>Escalation Expert
        </a>
      </v-card-title>
      <v-card-text>
      <audio src="https://public.a?m.files.1drv.com/y4mqr25m3L31SjxVdyCS4qkGoWrL0JT5ohtnioRci1meAbSWQuJ9hvV85Kd_BByH_L9bIKY7vJKChxVT9h2l89V9ichWGudAHZXF_4Nz0RuzkswDc3Bmi7NhO2j6RKTM4g3gOWJ1fVyBs2hldPA9pt8-deJxrO-dJ-1pFqw3BOBI2B9N1W-IGwt-Rz97IikLk-YOzetfe3yu4zoVmkh7BZf4FcRTqv2kXbXAx0f2iG0FBk?AVOverride=1"  controls></audio>
        <!-- <iframe src="https://onedrive.live.com/embed?cid=D32D5EB4762FC354&resid=D32D5EB4762FC354%21209079&authkey=AGTJXl7MeghyFIo" width="98" height="120" frameborder="0" scrolling="no"></iframe> -->
        <!-- <iframe src="https://onedrive.live.com/embed?cid=D32D5EB4762FC354&resid=D32D5EB4762FC354%21204569&authkey=AJAKyhRffDnsOd8" width="165" height="128" frameborder="0" scrolling="no"></iframe> -->
      </v-card-text>
      <!-- <v-card-actions>
        <v-btn>See more!</v-btn>
      </v-card-actions> -->
    </v-card>
    <v-card>
      <v-card-title style="font-size: 20px;">
        <a href="https://soundcloud.com/escalation-expert" target="_blank" class="d-inline-flex align-center">
          <v-img class="mr-2" :width="70" src="../assets/soundcloud.png"></v-img>Escalation Expert
        </a>
      </v-card-title>
      <v-card-text>
        <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1607918077&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
      </v-card-text>
      <!-- <v-card-actions>
        <v-btn>See more!</v-btn>
      </v-card-actions> -->
    </v-card>
    <v-card theme="dark" class="mt-2">
      <v-card-title style="font-size: 20px;">
        <a href="https://soundcloud.com/nerdreflext" target="_blank" class="d-inline-flex align-center">
          <v-img class="mr-2" :width="70" src="../assets/mixcloud.svg"></v-img>Escalation Expert  (ex. diox)
        </a>
      </v-card-title>
      <v-card-text>
        <iframe width="100%" height="180"
          src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fdiox_dj%2F&hide_cover=1&light=1"
          frameborder="0"></iframe>
      </v-card-text>
      <!-- <v-card-actions>
        <v-btn>See more!</v-btn>
      </v-card-actions> -->
    </v-card>
    <v-card class="mt-2">
      <v-card-title style="font-size: 20px;">
        <a href="https://soundcloud.com/nerdreflext" target="_blank" class="d-inline-flex align-center">
          <v-img class="mr-2" :width="70" src="../assets/soundcloud.png"></v-img>Escalation Expert  (ex. diox)
        </a>
      </v-card-title>
      <v-card-text>
        <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1607953639&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </v-card-text>
      <!-- <v-card-actions>
        <v-btn>See more!</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-container>
</template>

<script lang="ts">
import soundcloudSVG from '@/assets/soundcloud.svg';
export default {
  data: () => ({
    icons: {
      soundcloudSVG
    },
  }),
}
</script>

<style></style>
