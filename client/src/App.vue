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
import { useAppConfigStore } from 'src/stores/AppConfigStore';
import { onMounted, ref } from 'vue';
const bar = ref(null);
const appConfigStore = useAppConfigStore();
onMounted(() => {
  appConfigStore.state.bar = bar.value;
  
});
</script>
