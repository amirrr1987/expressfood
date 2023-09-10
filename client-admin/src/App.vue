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
import {onMounted, reactive, ref} from 'vue';

const aa = {name:  'foo',age:  32, active:  true}


const bar = ref(null);
const appConfigStore = useAppConfigStore();
onMounted(() => {
  appConfigStore.state.bar = bar.value;

});

// isDevelopMode(true);

const foo = [{name:  'foo',age:  32, active:  true}]

// logger('foo,'foo)
</script>
