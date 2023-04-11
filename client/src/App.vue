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
import  Logger   from "advanced-console-log"
const logger = new Logger({isDevelopMode: true})

const aa = {name:  'foo',age:  32, active:  true}

logger.message({name: 'foo', value: aa})

const bar = ref(null);
const appConfigStore = useAppConfigStore();
onMounted(() => {
  appConfigStore.state.bar = bar.value;

});

// isDevelopMode(true);

const foo = [{name:  'foo',age:  32, active:  true}]

// logger('foo,'foo)
</script>
