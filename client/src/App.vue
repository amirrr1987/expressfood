<template>
  <router-view />
  <q-ajax-bar
    ref="bar"
    position="bottom"
    color="accent"
    size="2px"
    skip-hijack
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const bar = ref(null);

</script>
